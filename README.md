# securepass API
This API allows you to generate strong passwords with customizable parameters.
## Base URL
api.example.com/v1/

## Endpoint
`GET /`
Generates a strong password based on the provided parameters.

### Parameters
- `length` (optional): The length of the password. Default is 12.
- `specialCharacters` (optional): Set to true to allow special characters in the password.
  
### Response
The API responds with a JSON object containing the following properties:
- `strenght`: The strength of the password, categorized as 'good', 'strong' or 'very strong'.
- `password`: The generated strong password.

Example response:
```json
{
  "strength": "very strong",
  "pasword": "ge$QTukTclQg*gAz"
}
```
## Example usage
### Request
`curl https://api.example.com/v1/`
### Response
```json
{
  "strength": "strong",
  "password": "JOdheG62VD38"
}
```
### Request 
`curl https://api.example.com/v1/length=16&specialCharacters=true`
### Response
```json
{
  "strenght": "very strong":
  "password": "ge$QTukTclQg*gAz"
}
```
## Error handling
If the API encounters an error, it will respond an appropiate HTTP status code and an error message in the following format:
```json
{
  "error": "Invalid parameters"
}
```
