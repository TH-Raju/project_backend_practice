## chouatamar backend

# Users

- http://localhost:5000/api/v1/users (GET)
- http://localhost:5000/api/v1/users/:id (GET single user)
- http://localhost:5000/api/v1/users/:id (DELETE )
- http://localhost:5000/api/v1/users/create-user (POST)
- http://localhost:5000/api/v1/users/:id (PATCH)

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

# Shops

- http://localhost:5000/api/v1/shops/create-shop (POST request)
- http://localhost:5000/api/v1/shops (GET All shops)
- http://localhost:5000/api/v1/shops/:id (GET single shop)
- http://localhost:5000/api/v1/shops/:id (PATCH)
- http://localhost:5000/api/v1/shops/:id (DELETE)

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

- http://localhost:5000/api/v1/shops/:id (PATCH)

- Demo Data

```
  {
  "name": "Tuk Tuk Venue",
  }
```

# Surprise Bag

- http://localhost:5000/api/v1/surprise-bag (GET)
- http://localhost:5000/api/v1/surprise-bag/:id (GET Single)
- http://localhost:5000/api/v1/surprise-bag/:id (PATCH)
- http://localhost:5000/api/v1/surprise-bag/:id (DELETE)
- http://localhost:5000/api/v1/surprise-bag/create-surprise (POST)

```
{
  "shopId": "65e62cdda32048a323f07de8",
  "userId": "65e4dd3313168d390e8db89d",
  "name": "Demo Product",
  "bagNo": "123456",
  "validation": "2024-03-04T12:00:00Z",
  "pickUpHour": "14:00 - 16:00",
  "pricing": "$10.99",
  "deliveryCharge": "$2.99",
  "description": "Lorem ipsum dolor sit.",
  "foodCategory": "breakfast",
  "orderStatus": "Pending",
  "qrCode": "https://example.com/qr-code"
}

```
