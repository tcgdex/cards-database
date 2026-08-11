import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ライフフォレスト",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、自分の番ごとに1回、自分の[草]ポケモン1匹のHPを「60」回復し、特殊状態もすべて回復してよい。このスタジアムは、場に出ているかぎり、おたがいのプレイヤーが手札からグッズまたはサポートを出して使ったとき、その効果を受けない。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544476,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
