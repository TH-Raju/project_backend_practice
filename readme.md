## chouatamar backend

- http://localhost:5000/api/v1/users/:id (GET single user)
- http://localhost:5000/api/v1/users/:id (DELETE )

- http://localhost:5000/api/v1/users/create-user (POST)

```
{
        "fullName": {
            "firstName": "John",
            "middleName": "Doe",
            "lastName": "Smith"
        },
        "email": "john.doe@example.com",
        "role": "user",
        "dateOfBirth": "1990-01-01",
        "gender": "male",
        "phoneNumber": "+1234567890",
        "profileImage": "https://example.com/profile-image.jpg",
        "address": "123 Main St, City, Country",
        "locationLink": "https://maps.example.com/location",
        "status": "active",
        "isDelete": "no"

}
```

- http://localhost:5000/api/v1/users/:id (PATCH)

```
{


        "email": "john.banega.don@example.com",
        "role": "user",
        "dateOfBirth": "1990-01-01",
        "gender": "male"


}
```

# Shop

- http://localhost:5000/api/v1/shops/create-shop (POST request)
- http://localhost:5000/api/v1/shops (GET All shops)

- Demo Data

```
  {
  "userId": "65e4dd3313168d390e8db89d",
  "name": "Example Venue",
  "category": "Restaurant",
  "weekend": "Saturday-Sunday",
  "images": {
  "url1": "https://example.com/image1.jpg"
  },
  "address": "123 Main St, City, Country",
  "locationLink": "https://maps.example.com/location",
  "about": "This is a sample venue description.",
  "serialNumber": "ABC123456"
  }
```
