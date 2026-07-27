import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ&カビゴンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おうえん" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札にあるエネルギーを1枚、自分のポケモンにつける。",
			},
		},
		{
			name: { ja: "ダンププレス" },
			damage: "120+",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが進化ポケモンなら、120ダメージ追加。",
			},
		},
		{
			name: { ja: "メガトンフレンズGX" },
			damage: 210,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "追加でエネルギーが1個ついているなら、自分の手札が10枚になるように、山札を引く。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558481,
			},
		},
	],

	retreat: 4,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [133, 143],

	suffix: "TAG TEAM-GX",
};

export default card;
