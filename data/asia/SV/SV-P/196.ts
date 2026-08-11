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
		ja: "不規則な 遺伝子を 持つ。 石から出る 放射線によって 体が 突然変異を 起こす。",
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
				tcgplayer: 587918,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [133],
};

export default card;
