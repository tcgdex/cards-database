import { Card } from "models/database/card";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "おむかえちょうちん",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュから「いちげき」のサポートを1枚選び、相手に見せて、手札に加える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560969,
				tcgplayer: 569225,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Secret Rare",
};

export default card;
