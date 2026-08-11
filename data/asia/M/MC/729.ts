import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "リーリエの決心",
	},

	illustrator: "Atsushi Furusawa",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。自分のサイドの残り枚数が6枚なら、引く枚数は8枚になる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864031,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "None",
};

export default card;
