import { Card } from "models/database/card";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リザード",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'ja-jp': "燃える 尻尾を 振り回すと まわりの 温度が どんどん 上がって 相手を 苦しめる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "もえるとうし" },
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を上から5枚トラッシュし、その中にある[炎]エネルギーをすべて、このポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かえんほうしゃ" },
			damage: 80,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559238,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒトカゲ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [5],
};

export default card;
