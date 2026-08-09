import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "エール団のしたっぱ",
		'zh-tw': "萊希拉姆&噴火龍GX",
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		ja: "相手の場のポケモンについているエネルギーを1個選び、相手の手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463204,
				tcgplayer: 597295,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
