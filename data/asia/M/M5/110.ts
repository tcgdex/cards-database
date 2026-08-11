import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サビ組のしたっぱ",
	},

	illustrator: "Teeziro",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。相手の場のポケモンについているエネルギーを1個選び、トラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888655,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Ultra Rare",
};

export default card;
