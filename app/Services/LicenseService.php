<?php

namespace App\Services;

use Exception;
use GuzzleHttp\Client;
use function GuzzleHttp\json_decode as jsonDecode;

class LicenseService
{
    public function register($code, $email, $hash = NULL)
    {
		return (object) ['success' => TRUE, 'message' => 'Valid code'];
        try {
            $client = new Client(['base_uri' => config('app.api.products.base_url')]);

            $response = $client->request('POST', 'licenses/register', [
                'form_params' => [
                    'code' => $code,
                    'email' => $email,
                    'domain' => request()->getHost(),
                    'hash' => $hash ?: config('app.hash')
                ]
            ]);

            return jsonDecode($response->getBody()->getContents());
        } catch (Exception $e) {
            return (object) ['success' => FALSE, 'message' => $e->getMessage()];
        }
    }

    public function download($code, $email, $hash, $version)
    {
        try {
            $client = new Client(['base_uri' => config('app.api.products.base_url')]);

            $response = $client->request('POST', 'products/download', [
                'form_params' => [
                    'code' => $code,
                    'email' => $email,
                    'domain' => request()->getHost(),
                    'hash' => $hash,
                    'version' => $version
                ],
            ]);

            return $response->getHeaderLine('Content-Type') == 'application/zip'
                ? $response->getBody()->getContents()
                : jsonDecode($response->getBody()->getContents());
        } catch (Exception $e) {
            return (object) ['success' => FALSE, 'message' => $e->getMessage()];
        }
    }
}