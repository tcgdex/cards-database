import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニンフィアex",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "カラフルハーモニー" },
			damage: "50×",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "自分のポケモン全員についている基本エネルギーのタイプの数×50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908308,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Special illustration rare",
	dexId: [700],

	suffix: "EX",
};

export default card;
