import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴンZ",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "さらに 優れた ポケモンを 目指し 追加した プログラムに 不具合が あったらしく 動きが おかしい。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しょきか" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手の進化しているポケモン全員の上から、それぞれ「進化カード」を1枚はがして退化させる。はがしたカードは、相手の手札にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "でんじほう" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「でんじほう」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561044,
			},
		},
	],

	evolveFrom: {
		ja: "ポリゴン２",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [474],
};

export default card;
