<?php
// use PHPMailer/PHPMailer/src/Exception.php;
// use PHPMailer/PHPMailer/src/PHPMailer.php;
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
    $c="";
    $symbolcurrency="";
    if($jsonObj->country=="IN"){
    \Stripe\Stripe::setApiKey('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');
    $c="INR";
    // $symbolcurrency="₹";
    }
    else{
    \Stripe\Stripe::setApiKey('sk_live_OR3b3QEuM7CnEMYJjiOoUIqj');
    $c="USD";
    // $symbolcurrency="$";
    }
    // Create a PaymentIntent with amount and currency
    $paymentIntent = \Stripe\PaymentIntent::create([
        'amount' => calculateOrderAmount($jsonObj->amount),
        'currency' => $jsonObj->currency,
        // "description" => $jsonObj->firstName ." Donated " . $c ." ".  $jsonObj->amount,
         "description" =>$jsonObj->email ." comments " .$jsonObj->description,
        "shipping" => [
            "name"=> $jsonObj->firstName." " .$jsonObj->lastName,
            "address"=> [
              "line1"=> $jsonObj->address,
              "postal_code"=> $jsonObj->zipCode,
              "city"=> $jsonObj->city,
              "state"=>$jsonObj->state,
             
              "country"=> $jsonObj->country,
        ],
        ],
    ]);
    // $customer = \Stripe\Customer::create([
    //     "name"=> $jsonObj->firstName." " .$jsonObj->lastName,
    //     "email"=>$jsonObj->email,
    // ]);

    $output = [
        'clientSecret' => $paymentIntent->client_secret,
        'data' => $customer,
    ];
 // onetimesub($jsonObj,$symbolcurrency);
    echo json_encode($output);
} catch (Error $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}


// function onetimesub($dta,$curr) {
//     try{


//    $mail = new PHPMailer\PHPMailer\PHPMailer();
   
                               
//     $mail->isSMTP();                                      
//     $mail->Host = 'smtp.gmail.com'; 
//     $mail->Port       = 587;   
//     $mail->SMTPAuth = true;                          
//     $mail->Username = 'lovewithoutreason';
//                    // SMTP username
//     $mail->Password = '#T3st12e4';                           // SMTP password
//     $mail->From = 'lwrgiving@gmail.com';
//     $mail->FromName = 'lovewithoutreason';
//     $mail->SingleTo   = true;
    
//     $mail->addAddress($dta->email);

   
//     $mail->isHTML(true);                                  
//     $mail->Subject = 'Donation';
//     $mail->Body    = '
//     <html>
//                     <body>
//                                       <p>'. date('F d,Y') .'</p>
// <p>'.$dta->firstName.'</p>


// <p>Dear '.$dta->firstName.',</p>

// <p>On behalf of Love Without Reason® (LWR), thank you for the recent gift of '.$curr.' '.$dta->amount.' on ,'. date('F d,Y') .' . In these days of uncertainty that our world is facing, your support means so much to LWR.  Human trafficking does not stop in the face of economic crisis or a pandemic.  </p>

// <p>We are continuing the work to educate and raise awareness on human trafficking, perform craniofacial surgeries, and ensure that our Project Butterfly center staff provide food and care to the ladies living in the red-light areas.  </p>

// <p>Thank you for believing in the vision. Until the World is Cleft-Free and Until There are No More Sold! </p>


// <p>Sincerely,</p>

// <p style="color:#7d0000"><strong>Anncy Daniel | Donor Relations</strong></p>

// <p><strong style="color:#7d0000">a:</strong>  P.O. Box 21009, Chattanooga, TN 37424</p>

// <p><strong style="color:#7d0000">e:</strong>  <a href="anncy@lovewithoutreason.org">anncy@lovewithoutreason.org</a></p>

// <p><strong style="color:#7d0000">w:</strong> <a href="lovewithoutreason.org">lovewithoutreason.org</a></p>

// <p><strong style="color:#7d0000">p:</strong> +1 (425)-275-2736</p>




// <p>No goods or services were provided in return for this contribution. All funds donated are used for charitable purposes. Love Without Reason is a US 501(c)3. EIN 26-1640273, donations may be tax deductible according to IRS regulations. </p>
                       
//                     </body>
//                 </html>
//                 ';
//     if(!$mail->send()) {
       
//             http_response_code(500);
//     echo json_encode(['error' => $e->getMessage()]);
//     } else {
      
//     }
//     $mail->ClearAllRecipients();
  

// }
// catch(Error $e){
//     http_response_code(500);
//     echo json_encode(['error' => $e->getMessage()]);
// }
// }
