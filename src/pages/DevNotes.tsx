import { Container, Typography } from '@mui/material';
import { Link } from 'react-router';

const DevNotes: React.FC = () => {
    return (
      <div style={{ background: 'rgb(25, 25, 25)', color: 'rgba(255, 255, 255, 0.81)' }}>
        <Container sx={{ py: '20px' }}>
          <Link style={{ color: 'rgba(255, 255, 255, 0.81)' }} to={'/'}>Back</Link>
          <Typography sx={{ mt: '10px' }} variant="body1" gutterBottom>
            Hello! Thank you for your time checking out the application! My goal was to produce an MVP in 2 hours so I had to cut some corners in the implementation phase.
            However I had something better in mind - a roadmap!
          </Typography>
          <img src="map.jpg" />
          <Typography variant="body1" gutterBottom>
            <b>Meta-enhancements:</b><br />
              a. Add ESLint and Prettier to enforce consistent coding standards and catch potential issues early.<br />
              b. Set up Husky for pre-commit hooks to enforce linting, code formatting, and testing integrity before committing.<br /><br />

            <b>Create a Design Palette:</b> Well-thought-out design palette will drastically improve the implementation time for new front-end features 
            and serve as a guiding beacon for designers in the future. Since I’m using MUI, I can reflect this palette in the custom theme.<br /><br />

            <b>Set up Unit Testing:</b> Use Vitest or Jest. I’d like to see my code coverage above ~80%. In my previous Web3 project, I kept it at 100% consistently.<br /><br />

            <b>Set up Integration/End-to-End Testing:</b> Use Playwright or Cypress. This leans more toward QA, but I’d like to lay the foundation for it to be expanded in the future.<br /><br />

            <b>State Management:</b> Although I understand why MobX might be useful (especially as it’s a staple for React Native), I personally prefer useSWR. 
            It’s perfect for cases where we only need to store/cache fetched data and provide flags like "loading" or "hasError."<br /><br />

            <b>Performance Optimization:</b> Implement lazy loading for routes, cache component methods with useCallback, and most importantly…<br /><br />

            <b>API Optimization:</b> In real scenarios, a singular "fetch-it-all" API method might not be very practical. 
            I’d prefer to have an option to enable server-side pagination, search, sorting, and filtering.<br /><br />

            <b>Accessibility Enhancements:</b> Often forgotten in the depths of the backlog, but still very important. 
            Lighthouse is an excellent tool to check your application’s accessibility and address any issues.<br /><br />

            <b>CI/CD Automation:</b> This depends on the platform, but ideally, we want type checking, lint checking, building, and testing integrated into the pipeline every time a PR is opened.<br /><br />

            That's it from the top of my head, but I’d be happy to discuss it further. Have a great day!
          </Typography>
        </Container>
      </div>
    )
}

export default DevNotes;