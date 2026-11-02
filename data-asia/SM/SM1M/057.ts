import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "どくバリ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561658,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
