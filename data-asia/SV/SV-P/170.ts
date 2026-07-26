import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ビリオとネア",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。その後、自分の手札が10枚以上あるなら、さらに2枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 778398,
				tcgplayer: 587913,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Promo",
};

export default card;
