import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "カルボウ",
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "戦いになると 火力が 上がり 摂氏１０００度に 達する。 油分の多い 木の実を 好む。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "おにび"}, "cost": ["Fire"], "damage": 20}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [935],
};

export default card;
