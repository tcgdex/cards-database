import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サンダーマウンテン",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいの場の[雷]ポケモンが使うワザに必要なエネルギーは、それぞれ[雷]エネルギー1個ぶん少なくなる。このスタジアムは、場に出ているかぎり、おたがいのプレイヤーが手札からグッズまたはサポートを出して使ったとき、その効果を受けない。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544451,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
