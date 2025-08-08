# Appointment Management App

A beautiful and responsive Angular application for managing appointments with an elegant user interface and modern design.

## Features

- **Create Appointments**: Add new appointments with description and date
- **Beautiful Date Picker**: Interactive ng-bootstrap date picker with Today and Clear functionality
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Local Storage**: Appointments are saved locally and persist between sessions
- **Modern UI**: Gradient backgrounds, smooth animations, and clean design
- **Delete Functionality**: Remove appointments with a single click

## Technologies Used

- Angular 16.1.6
- ng-bootstrap for date picker
- Bootstrap for responsive layout
- CSS3 with gradients and animations
- TypeScript
- Local Storage for data persistence

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install ng-bootstrap:
   ```bash
   ng add @ng-bootstrap/ng-bootstrap
   ```

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Project Structure

- `src/app/appointment-list/` - Main component for appointment management
- `src/app/models/` - TypeScript interfaces and models
- `src/app/app.component.*` - Root component with background styling
- `src/assets/` - Static assets and images

## Features Overview

### Appointment Form
- Description input field
- Interactive date picker with min/max date validation
- Today button for quick date selection
- Clear button to reset selected date
- Add button to create appointments

### Appointment List
- Displays all appointments with ID, description, and formatted date
- Delete functionality for each appointment
- Responsive layout that adapts to screen size

### Design Features
- Light gradient color scheme (teal to pink)
- Semi-transparent cards with backdrop blur
- Smooth hover animations
- Mobile-optimized responsive design

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.