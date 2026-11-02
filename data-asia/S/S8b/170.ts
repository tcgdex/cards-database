import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "みずの塔",
		'zh-tw': "水之塔",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "おたがいの「れんげき」のポケモン全員のにげるためのエネルギーは、それぞれ2個ぶん少なくなる。",
		'zh-tw': "雙方的所有「連擊」寶可夢【撤退】所需的能量各減少2個。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586686,
				tcgplayer: 571422,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578448,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "E",
	rarity: "None",
};

export default card;
