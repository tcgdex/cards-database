import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキハミ",
	},

	illustrator: "Izucch",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "食べた 雪から 得た 冷気を 体内の 器官で 増幅して 氷柱のような トゲを 作る。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "つらら"}, "cost": ["Water"], "damage": 20}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [872],
};

export default card;
