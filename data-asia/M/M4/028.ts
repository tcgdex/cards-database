import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "モココ",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "でんじしょうがい"}, "cost": ["Lightning", "Colorless"], "damage": 40, "effect": {"ja": "次の相手の番、相手は手札からグッズを出して使えない。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "メリープ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [180],
};

export default card;
