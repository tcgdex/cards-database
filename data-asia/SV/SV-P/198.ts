import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ",
	},

	illustrator: "Susumu Maeya",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "様々な 姿に 進化する。 イーブイの 遺伝子は 進化の 秘密を 解き明かす カギだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "カラフルキャッチ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から、それぞれちがうタイプの基本エネルギーを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ずつき" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 687693,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [133],
};

export default card;
