import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "覚醒のドラム",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場の「古代」のポケモンの数ぶん、山札を引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752843,
				tcgplayer: 568396,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "ACE SPEC Rare",
};

export default card;
