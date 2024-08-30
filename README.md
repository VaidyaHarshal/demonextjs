# Project Name

### Amazing Posts Explorer

## Overview

This project is a React application with a Next.js backend and the application consists of components such as `ItemList` and `ItemDetail`

## Running the Project Locally

To run the project locally, follow these steps:

### Prerequisites

1. **Node.js and npm**: Ensure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/vaidyaharshal/demonextjs.git
   cd demonextjs
   ```

2. **Install Dependencies**

   Run the following command to install the project dependencies:

   ```bash
   npm install
   ```

3. **Run the Development Server**

   Start the development server to see the application in action:

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000` to view the application.

### Build for Production

To create a production build of the application, use:

```bash
npm run build
```

After building, you can serve the production build locally using:

```bash
npm run start
```

## Architecture Decisions

### Technologies Used

- **Frontend**: React with Next.js for server-side rendering and routing.
- **Styling**: Tailwind CSS for utility-first styling.
- **State Management**: React's built-in state management.

### Key Decisions

1. **Next.js**: Chosen for its server-side rendering capabilities and built-in routing support.
2. **Tailwind CSS**: Selected for its flexibility and ease of creating responsive designs.

### Code Structure

- **`pages/`**: Contains the Next.js pages and routing logic.
- **`components/`**: Houses reusable React components.
- **`public/`**: Static assets like images and fonts.
- **`styles/`**: Global CSS and Tailwind configuration.

## Challenges and Solutions

### 1. **State Management**

**Challenge**: Managing global state across various components can become complex, especially in large applications.

**Solution**: Use React’s Context API for managing global state.

### 2. **API Integration**

**Challenge**: Integrating and managing API calls can be error-prone, especially with complex or dynamic APIs.

**Solution**: Use libraries like Fetch with proper error handling and request cancellation.

## Contact

For any questions or issues, please reach out to [harshal.vaidya300@gmail.com](mailto:your-email@example.com).
