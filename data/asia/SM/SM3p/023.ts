import { Card } from "models/database/card";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブイゼル",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "２本の 尻尾を スクリューの ように 回して 泳ぐ。 潜る ときは 浮き袋が しぼむ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひれカッター" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "みずでっぽう" },
			damage: 40,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560181,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [418],
};

export default card;
