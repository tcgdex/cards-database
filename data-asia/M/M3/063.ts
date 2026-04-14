import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ホルビー",
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "大きな 耳で 地面を 掘って 巣穴を 作る。 一晩中 休まずに 掘り続けられる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "けとばす"}, "damage": 10, "cost": ["Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [659],

	thirdParty: {
		cardmarket: 868042,
		tcgplayer: 674382,
	},
};

export default card;