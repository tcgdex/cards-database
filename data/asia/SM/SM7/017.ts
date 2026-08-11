import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ワカシャモ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'ja-jp': "戦いに なると 体内の 炎が 激しく 燃え上がる。 キックは 破壊力 抜群だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "にどげり" },
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数x30ダメージ。",
			},
		},
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
				cardmarket: 558978,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アチャモ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [256],
};

export default card;
