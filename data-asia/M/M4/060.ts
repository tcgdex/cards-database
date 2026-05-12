import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "テッシード",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "棘を 飛ばして 身を 守る。  狙った 方向に 飛ばすには  たくさんの 訓練が 必要。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "ころがりタックル" }, "damage": "40", "cost": ["Metal", "Metal"], "effect": { "ja": "" } }
	],

	
	weaknesses: [{ "type": "Fire", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	rarity: "Common",
	dexId: [597],
	regulationMark: "I",
};

export default card;
