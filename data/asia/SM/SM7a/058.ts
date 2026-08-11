import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "サンダーマウンテン",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "おたがいの場の[雷]ポケモンが使うワザに必要なエネルギーは、それぞれ[雷]エネルギー1個ぶん少なくなる。このスタジアムは、場に出ているかぎり、おたがいのプレイヤーが手札からグッズまたはサポートを出して使ったとき、その効果を受けない。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558946,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Rare Holo",
};

export default card;
