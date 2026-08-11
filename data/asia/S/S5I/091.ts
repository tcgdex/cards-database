import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "いちげきエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは「いちげき」のポケモンにしかつけられず、「いちげき」のポケモン以外についているなら、トラッシュする。このカードは、ポケモンについているかぎり、[闘][悪]の2つのタイプのエネルギー1個ぶんとしてはたらき、このカードをつけているポケモンが使うワザの、相手のバトルポケモンへのダメージは「＋20」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 538658,
				tcgplayer: 569040,
			},
		},
	],

	regulationMark: "E",
	rarity: "Secret Rare",
};

export default card;
