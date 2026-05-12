import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ハリマロン",
	},

	illustrator: "HACCAN",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "普段 やわらかい 頭の トゲは 力を こめると 鋭く 尖り 岩をも つらぬくほど 硬くなる。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "たたく" }, "damage": "10", "cost": ["Grass"], "effect": { "ja": "" } },
		{ "name": { "ja": "トゲでさす" }, "damage": "30", "cost": ["Grass", "Grass"], "effect": { "ja": "" } }
	],

	
	weaknesses: [{ "type": "Fire", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	rarity: "Common",
	dexId: [650],
	regulationMark: "I",
};

export default card;
