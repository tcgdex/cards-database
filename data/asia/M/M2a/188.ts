import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "夜の鉱山",
	},

	illustrator: "Kenichi Yamaguchi",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいの場の「テラスタル」のポケモン全員は、ワザを使うためのエネルギーが、それぞれ[C]エネルギー1個ぶん多くなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861431,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "None",
};

export default card;
