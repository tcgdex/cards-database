import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ケロマツ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "繊細な 泡で 体を 包み 肌を 守る。 のんきに 見せかけて 抜け目なく 周囲を うかがう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずかけ" },
			damage: 10,
			cost: ["Water"],
		},
		{
			name: { ja: "スプラッシュ" },
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559563,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [656],
};

export default card;
