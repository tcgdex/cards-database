import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のさいみん装置",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「ロケット団のポケモン」が、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをねむりにする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821712,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "I",
	rarity: "Promo",
};

export default card;
