import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "むしよけスプレー",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561732,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
