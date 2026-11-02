import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "今 現在の 調査では なんと ８種類もの ポケモンへ 進化する 可能性を 持つ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エナジーしんか" },
			effect: {
				ja: "自分の番に、自分の手札から基本エネルギーをこのポケモンにつけたとき、1回使える。つけたエネルギーと同じタイプの、このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "クイックドロー" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、自分の山札を1枚引く。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561649,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [133],
};

export default card;
