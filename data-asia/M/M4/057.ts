import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ダンバル",
	},

	illustrator: "toi8",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "磁力の 波長で 仲間と 交信。 群れになった ダンバルは 一糸乱れぬ 動きを する。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "ずつき" }, "damage": "10", "cost": ["Metal"], "effect": { "ja": "" } },
		{ "name": { "ja": "ビーム" }, "damage": "20", "cost": ["Metal"], "effect": { "ja": "" } }
	],

	
	weaknesses: [{ "type": "Fire", "value": "x2" }],
	
	resistances: [],
	
	retreat: 1,

	variants: [{"type": "normal"}],
	rarity: "Common",
	dexId: [374],
	regulationMark: "I",
};

export default card;
