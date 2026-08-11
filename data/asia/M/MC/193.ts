import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ブイゼル",
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "尻尾を スクリューのように まわし 水中を 泳ぐだけでなく まとわりつく 海草も 切れる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しっぽではたく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "スプラッシュ" },
			damage: 30,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863489,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [418],
};

export default card;
