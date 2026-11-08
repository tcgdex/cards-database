import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ツールスクラッパー",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいの場のポケモンについている「ポケモンのどうぐ」を2枚まで選び、トラッシュする。",
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon",
	thirdParty: {
		cardmarket: 829083,
		tcgplayer: 636633,
	},
};

export default card;
