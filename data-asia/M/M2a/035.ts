import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキワラシ",
	},

	illustrator: "Wintr Wandr",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ユキワラシの 棲みついた 家は お金持ちになるという 言い伝えが 雪国には 残っている。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ひんやり"}, "cost": ["Water"], "damage": 10}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [361],
};

export default card;
