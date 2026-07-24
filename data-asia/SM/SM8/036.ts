import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "デンリュウ",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		ja: "尻尾の 先が 光り輝く。 光は はるか 遠くまで 届き 迷った者の 道標となる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "みえざるせんこう" },
			effect: {
				ja: "自分の番に1回使える。自分の手札にある[雷]エネルギーを2枚、ロストゾーンに置く。その後、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ばくれつだん" },
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "相手のポケモン2匹に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558675,
			},
		},
	],

	evolveFrom: {
		ja: "モココ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [181],
};

export default card;
