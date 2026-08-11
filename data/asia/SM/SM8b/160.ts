import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ラニュイ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Trainer",

	effect: {
		ja: "このカードは、相手のバトル場にたねポケモンがいなければ使えない。相手のバトルポケモンについているエネルギーを1個、相手の山札の上にもどす。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551296,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
