import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "タギングル",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "シルシュルー",
	},

	attacks: [{"name": {"ja": "Miracle Paint"}, "damage": 90, "cost": ["Darkness", "Colorless"], "effect": {"ja": "Flip a coin. If heads, pick a Special Condition. Your opponent's Active Pokémon now has that condition."}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [945],
};

export default card;
