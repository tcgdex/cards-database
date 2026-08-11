import { Card } from "models/database/card";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アマカジ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "美味しそうな 香りが 体から 漏れ出している。 匂いに 誘われた ドデカバシに 丸呑みに される。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あまいかおり" },
			cost: ["Grass"],
			effect: {
				'ja-jp': "自分のポケモン1匹のHPを「30」回復する。",
			},
		},
		{
			name: { ja: "はねる" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561680,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [761],
};

export default card;
