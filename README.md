# My Store Frontend

MyStore is an Angular e-commerce application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process. It currently takes a list of products from a json file. However, it will be integrated with the backend APIs at https://github.com/chijioke-ibekwe/store-front-backend soon. 

### Components
The application consists of the following components (listed according to the flow of the application):

- Product List Component:
This component fetches the list of products from the product service and displays it through its child component, the Product Item Component.

- Product Item Component:
This component receives product data from the Product List Component and displays it. Products can also be added to cart through this component.

- Product Item Detail Component:
This component fetches the complete details of a particular product from the product service and displays it. Products can also be added to cart through this component.

- Cart Component:
This component displays all the products that have been added to cart by the user and their respective quantities. Adjustments can also be made to a user's order through this component. This component also accepts checkout and payment data from the user.

- Confirmation Component:
This component displays the order summary for the user and represents a confirmation of order.


## Getting Started
### Prerequisites
You need the following installed on your machine to run this application.  
NB: The outlined versions are the tested ones. Other versions could also work.
1. Node v18.12.1

## How to Run
To run the application locally:
- Clone the repository using the following command:
```bash
git clone https://github.com/<your-git-username>/my-store-frontend.git
```

- Install the dependencies using:
```bash
npm install
```

- Start up the application server on the default port 4200, using the command;
```bash
npm start
```

## Author

- Chijioke Ibekwe (https://github.com/chijioke-ibekwe)
