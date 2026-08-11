import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サナギラス",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "岩盤のような 硬い 殻に 覆われているが 力は 強く 暴れると 山も 崩れてしまう。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "だんがんしんか" },
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。次の相手の番の終わりまで、このポケモンは、相手のポケモンからワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶちかます" },
			damage: 30,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558694,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヨーギラス",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [247],
};

export default card;
