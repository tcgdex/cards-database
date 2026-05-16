import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ウリムー",
	},

	illustrator: "imoniii",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "鼻先で 地面を 掘って 食べるものを 探しだす。 凍った 地面も へっちゃらだ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ふむ"}, "damage": 10, "cost": ["Colorless"]}, {"name": {"ja": "スノーアイス"}, "damage": 20, "cost": ["Water", "Colorless"]}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [220],

	thirdParty: {
		cardmarket: 850530,
		tcgplayer: 655802,
	},
};

export default card;