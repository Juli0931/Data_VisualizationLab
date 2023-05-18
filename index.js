import { express, cors, dotenv, fs} from './dependencies.js';
import userRoutes from './routes/userRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';

dotenv.config();
const PORT = process.env.PORT;
const app = express();
const STATIC_APP = express.static('./static/client-app');
const STATIC_DASHBOARD = express.static('./static/dashboard-app');
app.use(express.json());
app.use('/app', STATIC_APP);
app.use('/dashboard-app', STATIC_DASHBOARD);
app.use('/user', userRoutes);
app.use('/dashboard', dashboardRoutes);



app.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
});