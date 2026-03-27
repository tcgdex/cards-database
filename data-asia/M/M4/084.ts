import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ハリマロン",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "普段 やわらかい 頭の トゲは 力を こめると 鋭く 尖り 岩をも つらぬくほど 硬くなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たたく" },
			damage: 10,
			cost: ["Grass"],
		},
		{
			name: { ja: "トゲでさす" },
			damage: 30,
			cost: ["Grass", "Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [650],
};

export default card;
