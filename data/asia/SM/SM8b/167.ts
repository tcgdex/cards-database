import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リザード",
	},

	illustrator: "nagimiso",
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
			type: "holo",
			thirdParty: {
				cardmarket: 551331,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒトカゲ",
	},

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [5],
};

export default card;
