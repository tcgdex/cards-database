import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ホエルコ",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "飲みこんだ 海水を 目の 上の 鼻の 穴から 噴き出し アピール。 毎日 １トンの ヨワシを 食う。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 40,
			cost: ["Water", "Water"],
		},
		{
			name: { ja: "スプラッシュ" },
			damage: 80,
			cost: ["Water", "Water", "Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888251,
			},
		},
	],

	retreat: 4,
	regulationMark: "J",
	rarity: "Common",
	dexId: [320],
};

export default card;
