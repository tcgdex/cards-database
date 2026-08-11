import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "覚醒のドラム",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分の場の「古代」のポケモンの数ぶん、山札を引く。",
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
