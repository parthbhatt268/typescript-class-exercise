// In singelton you generrally Private the constructor so no one can access it.
// 'static' keyword used below means that that memeber of class lives only on teh class and not on
// any instance of class.
// so when you do add word static then you cannot accces them on obj

// static → where the property lives (on the class itself, not on each object).

// private → who can see/use the property (only code inside that class).

export default class ConfigManager {
    private static instance: ConfigManager;

    private settings: Record<string, string>;

    private constructor() {
        this.settings = {
            ENV: "development", //process.env.NODE_ENV
            API_URL: "http://localhost:4000", //process.env.API_URL
        }
    }

    public static getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
        ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    public get(key: string): string | undefined {
        return this.settings[key];
    }

    public set(key: string, value: string): void {
        this.settings[key] = value;
    }
}


const cfg1 = ConfigManager.getInstance();
console.log("Initial ENV:", cfg1.get("ENV"));

cfg1.set("ENV", "production");

const cfg2 = ConfigManager.getInstance();
console.log("Same instance?", cfg1 === cfg2);
console.log("Updated ENV:", cfg2.get("ENV"));  