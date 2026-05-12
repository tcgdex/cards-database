import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "チャオブー",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "体内の 炎が 燃え上がると 動きの キレと スピードが 増す。 ピンチになると 煙を 吹き出す。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "かえん"}, "damage": "30", "cost": ["Fire"], "effect": {"ja": ""}}, {"name": {"ja": "ヒートスタンプ"}, "damage": "80", "cost": ["Fire", "Fire"], "effect": {"ja": ""}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ポカブ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [499],
};

export default card;
