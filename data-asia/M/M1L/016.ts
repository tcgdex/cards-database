import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ラビフット",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "ヒバニー",
	},

	attacks: [{"name": {"ja": "Jump Kick"}, "cost": ["Colorless"], "effect": {"ja": "This attack does 40 damage to 1 of your opponent's Benched Pokémon (Don't apply Weakness and Resistance for Benched Pokémon)"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [814],
};

export default card;
