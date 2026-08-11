import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポケモンレンジャー",
	},

	illustrator: "Yusuke Ohmura",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーと、おたがいのポケモンにかかっているワザの効果は、すべてなくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 804759,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Promo",
};

export default card;
