// نقطهٔ ورود و مونتاژ ماژول‌های مستقل برنامه.
import {APP_CONFIG} from './config/app.config.js';
import {CARS,DEFAULT_CAR_ID} from './data/cars.data.js';
import {RACES} from './data/races.data.js';
import {EventBus} from './core/EventBus.js';
import {Storage} from './core/Storage.js';
import {Router} from './core/Router.js';
import {GameState} from './core/GameState.js';
import {DriveSystem} from './systems/DriveSystem.js';
import {RaceSystem} from './systems/RaceSystem.js';
import {MainMenuScreen} from './screens/MainMenuScreen.js';
import {CityScreen} from './screens/CityScreen.js';
import {ComingSoonScreen} from './screens/ComingSoonScreen.js';
import {EitaaAdapter} from './platform/eitaa-adapter.js';
import {CapacitorAdapter} from './platform/capacitor-adapter.js';
const bus=new EventBus(),storage=new Storage(APP_CONFIG.storageKey),state=new GameState(storage,DEFAULT_CAR_ID),router=new Router(document.getElementById('app'));
// SDKهای بومی اختیاری هستند و نبودشان اجرای مرورگر را متوقف نمی‌کند.
void new EitaaAdapter().init();void new CapacitorAdapter().init();
function menu(){router.navigate(new MainMenuScreen({config:APP_CONFIG,state,onEnter:city,onComingSoon:title=>router.navigate(new ComingSoonScreen(menu),{title})}))}
function city(){const car=CARS.find(c=>c.id===state.data.carId)||CARS.find(c=>c.id===DEFAULT_CAR_ID)||CARS[0];router.navigate(new CityScreen({config:APP_CONFIG,car,races:RACES,state,drive:new DriveSystem(car,APP_CONFIG.map),raceSystem:new RaceSystem(bus),onBack:menu}))}
bus.on('race:finished',r=>{if(r.success)console.info('Race completed:',r.race.id)});menu();