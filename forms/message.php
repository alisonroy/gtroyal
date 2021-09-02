<?php

$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_URL => "https://clicksend.p.rapidapi.com/sms/send",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => "{\n  \"messages\": [\n    {\n      \"source\": \"GTROYAL\",\n      \"from\": \"GTROYAL\",\n      \"body\": \"Welcome to GTROYAL\",\n      \"to\": \"+918220290460\",\n      \"custom_string\": \"this is a test\"\n    }\n  ]\n}",
    CURLOPT_HTTPHEADER => [
        "authorization: Basic cGFmaWdhOTkzN0BlbmFtZWxtZS5jb206MzlDRDExRTMtQkQ1MS0wREFDLTJGQkYtMzQxRkJCOTE4M0Mx",
        "content-type: application/json",
        "x-rapidapi-host: clicksend.p.rapidapi.com",
        "x-rapidapi-key: 1521573350msh625a072b13f4775p119b04jsne65c6b1c48d4"
    ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error #:" . $err;
} else {
    echo $response;
}
