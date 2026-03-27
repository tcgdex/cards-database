import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "デカヌチャン",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	evolveFrom: {
		ja: "ナカヌチャン",
	},

	attacks: [{"name": {"ja": "Big Swing"}, "damage": "240-", "cost": ["Metal"], "effect": {"ja": "This attack does 60 less damage for each Energy attached to your opponent's Active Pokémon."}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [959],
};

export default card;
