import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "オニドリル",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "オニスズメ",
	},

	attacks: [{"name": {"ja": "Repeating Drill"}, "damage": "30x", "cost": ["Colorless"], "effect": {"ja": "Flip 5 coins. This attack does 30 damage for each heads"}}],

	weaknesses: [{"type": "Electric", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [22],
};

export default card;
