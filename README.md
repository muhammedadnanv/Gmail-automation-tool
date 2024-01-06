To use the Gmail Automation Tool in Termux, you need to follow these steps:

### Prerequisites:

1. Install Node.js:
   ```bash
   pkg install nodejs
   ```

2. Install Git (if not already installed):
   ```bash
   pkg install git
   ```

### Clone and Set Up the Repository:

3. Clone the Gmail Automation Tool repository:
   ```bash
   git clone https://github.com/muhammedadnanv/Gmail-automation-tool.git
   ```

4. Navigate to the project directory:
   ```bash
   cd Gmail-automation-tool
   ```

5. Install dependencies:
   ```bash
   npm install
   ```

### Set Up Gmail API:

6. Follow the instructions in the repository's README to set up the Gmail API credentials. You may need to create a project in the Google Cloud Console and enable the Gmail API.

7. Download the `credentials.json` file and place it in the project directory.

### Run the Tool:

8. Execute the Termux command to run the Gmail Automation Tool:
   ```bash
   node index.js
