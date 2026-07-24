import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒートファクトリー",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の手札にある[炎]エネルギーを、1枚トラッシュしてよい。トラッシュした場合、自分の山札を3枚引く。このスタジアムは、場に出ているかぎり、おたがいのプレイヤーが手札からグッズまたはサポートを出して使ったとき、その効果を受けない。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558732,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Rare Holo",
};

export default card;
