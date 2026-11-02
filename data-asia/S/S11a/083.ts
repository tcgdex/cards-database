import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミクリ",
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		ja: "自分の山札を3枚引く。相手は、のぞむなら、山札を1枚引く。その場合、自分は、さらに山札を1枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673400,
				tcgplayer: 570846,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Ultra Rare",
};

export default card;
