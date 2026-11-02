import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ズミ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "自分の「れんげき」のポケモンを2匹まで選び、HPをそれぞれ「60」回復する。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560991,
				tcgplayer: 569319,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Hyper rare",
};

export default card;
