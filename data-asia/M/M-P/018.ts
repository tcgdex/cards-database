import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ホゲータ",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "炎袋が 小さく あふれ出た エネルギーが 頭の くぼみから 放出され ゆらゆら 揺れる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねつでこがす" },
			damage: 20,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 839256,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [909],
};

export default card;
