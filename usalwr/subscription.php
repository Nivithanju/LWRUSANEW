<?php

require 'vendor/autoload.php';

// This is a sample test API key.

error_reporting(0);
header('Content-Type: application/json');

try {
    // retrieve JSON from POST body
    $jsonStr = file_get_contents('php://input');
    $jsonObj = json_decode($jsonStr);
    if($jsonObj->country=="IN"){
    \Stripe\Stripe::setApiKey('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');
    }
    else{
    \Stripe\Stripe::setApiKey('sk_live_OR3b3QEuM7CnEMYJjiOoUIqj');
    }
    // Create a PaymentIntent with amount and currency
    try{
    $paymentmethod = \Stripe\PaymentMethod::retrieve($jsonObj->paymentMethodId);
    $paymentmethod->attach([
        'customer' => $jsonObj->customerId,
    ]);
    $updatecustomer = \Stripe\Customer::update($jsonObj->customerId,
        ['invoice_settings' =>[
            'default_payment_method'=>$paymentmethod->id
            ] 
        ]);
        // $output = [
        //     'data' => $paymentmethod,
        // ];
    
        // echo json_encode($output);
    
    }catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
      }
    $subscription = \Stripe\Subscription::create([
        'customer' => $jsonObj->customerId,
        'items' => [
          [
            'price' => $jsonObj->priceId,
          ],
        ],
        'expand' => ['latest_invoice.payment_intent'],
      ]);
      $output = [
        'data' => $paymentmethod,
    ];

    echo json_encode($output);
        
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
  }
  

