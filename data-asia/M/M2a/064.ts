import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲピー",
	},

	illustrator: "Yoko Hishida",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "殻の中に 幸せが たくさん つまっているらしく 優しくされると 幸運を 分け与える という。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "はたく"}, "cost": ["Colorless", "Colorless"], "damage": 30}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [175],
};

export default card;
