import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ワンダーラビリンス",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいの場のポケモン（[妖]ポケモンをのぞく）が使うワザに必要なエネルギーは、それぞれ[無]エネルギー1個ぶん多くなる。このスタジアムは、場に出ているかぎり、おたがいのプレイヤーが手札からグッズまたはサポートを出して使ったとき、その効果を受けない。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544481,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
