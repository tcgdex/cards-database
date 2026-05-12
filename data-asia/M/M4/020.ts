import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ケロマツ",
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "繊細な 泡で 体を 包み 肌を 守る。 のんきに 見せかけ 抜け目なく 周囲を うかがう。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "もってくる" }, "damage": "", "cost": ["Colorless"], "effect": { "ja": "自分の山札を1枚引く。" } },
		{ "name": { "ja": "みずでっぽう" }, "damage": "10", "cost": ["Water"], "effect": { "ja": "" } }
	],

	
	weaknesses: [{ "type": "Lightning", "value": "x2" }],
	
	resistances: [],
	
	retreat: 1,

	variants: [{"type": "normal"}],
	rarity: "Common",
	dexId: [656],
	regulationMark: "I",
};

export default card;
