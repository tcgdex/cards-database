import { Card } from "models/database/card";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リーリエ",
	},

	illustrator: "Mana Ibe",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札が6枚になるように、山札を引く。最初の自分の番に使ったなら、8枚になるように引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557255,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "A",
	rarity: "Rare Holo",
};

export default card;
