import { Card } from "../../../interfaces";
import Set from "../SM1S";

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
		ja: "アンバランス かつ 不安定な 遺伝子を 持っており 様々な 進化の 可能性を 秘めている。",
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
				cardmarket: 561721,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [133],
};

export default card;
