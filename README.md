# Hotspot Application

This project provides a simple hotspot login system. Users enter their identity information, which sends a query to the NVI (Population and Citizenship Affairs) Mernis service. If the information is verified, the user is redirected to the main page. The primary goal of this project is to offer a secure and fast identity verification mechanism.

## Features
- User-friendly interface
- Identity verification via NVI Mernis service
- Redirect to the main page upon successful login
- Simple and efficient structure

## Installation

1. **Clone the Repository:**
   git clone https://github.com/mehmetberkekeceli/hotspot.git

2. **Navigate to the Project Directory:**
   cd hotspot

3. **Install Dependencies:**
   Depending on the technologies used in your project (e.g., Node.js, Python, etc.), run the appropriate command to install dependencies:
   npm install  # If using Node.js
   # or
   pip install -r requirements.txt  # If using Python

4. **Configuration:**
   - Add the necessary API keys or authentication details for connecting to the NVI Mernis service in a `.env` file. Example:
     NVI_API_KEY=your_api_key
     NVI_ENDPOINT=https://mernis-api-url

5. **Run the Application:**
   npm start  # For Node.js
   # or
   python app.py  # For Python

## Usage
1. Start the application.
2. Enter your identity information (e.g., Turkish ID number and other required details) on the login screen.
3. The information is sent to the NVI Mernis service, and if verified, you will be redirected to the main page.

## Requirements
- [Node.js](https://nodejs.org/) (or another runtime suitable for your project)
- Access to the NVI Mernis service (API key or authorization)
- Internet connection

## Contributing
If you'd like to contribute to this project:
1. Fork the repository.
2. Create a branch for a new feature or bug fix:
   git checkout -b feature/new-feature
3. Make your changes and commit them:
   git commit -m "Added new feature"
4. Push your branch to the main repository and open a Pull Request.

## License
This project is licensed under the [MIT License](LICENSE). See the `LICENSE` file for more details.

## Contact
For questions or suggestions:  
- Email: [berke.keceli96@gmail.com](mailto:berke.keceli96@gmail.com)  
- GitHub: [mehmetberkekeceli](https://github.com/mehmetberkekeceli)

- Login =>
- ![Login](https://github.com/user-attachments/assets/9dd8d463-1918-47dc-bc03-10e9522c7dc0)

- Dashboard =>
- ![Dashboard](https://github.com/user-attachments/assets/7843cedf-3fa5-4680-844d-7885c71625ee)

