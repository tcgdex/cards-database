import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シュウメイ",
	},

	illustrator: "kantaro",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、相手のバトルポケモンがどくのときにしか使えない。自分の手札をすべて山札にもどして切る。その後、山札を7枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705382,
				tcgplayer: 587813,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
