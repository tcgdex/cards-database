import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒバニー",
	},

	illustrator: "svlt",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Wild Kick"}, "cost": ["Colorless"], "effect": {"ja": "Flip a coin. If tails, this attack does nothing"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [813],
};

export default card;
