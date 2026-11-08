import { Card } from "models/database/card";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ズミ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の「れんげき」のポケモンを2匹まで選び、HPをそれぞれ「60」回復する。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560984,
				tcgplayer: 569311,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Ultra Rare",
};

export default card;
