import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモンレンジャー",
	},

	illustrator: "Yusuke Ohmura",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーと、おたがいのポケモンにかかっているワザの効果は、すべてなくなる。",
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
