<?php

require 'vendor/autoload.php';

// This is a sample test API key.

error_reporting(0);
function calculateOrderAmount($value) {
    try{
   $value= preg_replace("/[^\d.-]/",'',($value . ''));
  if ($value && in_array('.',$value)) {
    $value=substr(strpos($value,'.') + 3,0);
  }
  return ($value ? round(floatval($value) * 100) : 0);
}
catch(Error $e){
    
}
}

header('Content-Type: application/json');

try {
    // retrieve JSON from POST body
    $jsonStr = file_get_contents('php://input');
    $jsonObj = json_decode($jsonStr);
    $jsonObj=$jsonObj->items;
    if($jsonObj->country=="IN"){
    \Stripe\Stripe::setApiKey('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');
    }
    else{
    \Stripe\Stripe::setApiKey('sk_live_OR3b3QEuM7CnEMYJjiOoUIqj');
    }
    // Create a PaymentIntent with amount and currency
    $customer = \Stripe\Customer::create([
        "name"=> $jsonObj->firstName." " .$jsonObj->lastName,
        "email"=>$jsonObj->email,
        "shipping" => [
            "name"=> $jsonObj->firstName." " .$jsonObj->lastName,
            "address"=> [
              "line1"=> $jsonObj->address,
              "postal_code"=> $jsonObj->zipCode,
              "city"=> $jsonObj->city,
               "state"=> $jsonObj->state,
              "country"=> $jsonObj->country,
        ],
        ],
    ]);

    $output = [
        'data' => $customer,
    ];

    echo json_encode($output);
} catch (Error $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
