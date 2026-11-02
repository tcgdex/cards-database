import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ホゲータ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "炎袋が 小さく あふれ出た エネルギーが 頭の くぼみから 放出され ゆらゆら 揺れる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かえんほうしゃ" },
			damage: 70,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 894873,
			},
		},
	],

	retreat: 3,
	rarity: "Promo",
	dexId: [909],
};

export default card;
