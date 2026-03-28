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

	attacks: [{"name": {"ja": "かえん"}, "cost": ["Fire"], "damage": 30}, {"name": {"ja": "ヒートスタンプ"}, "cost": ["Fire", "Fire", "Colorless"], "damage": 80}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ポカブ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [499],
};

export default card;
