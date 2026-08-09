import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "オニオン",
	},

	illustrator: "Jiro Sasumo",
	category: "Trainer",

	effect: {
		ja: "自分の山札を3枚引く。その後、自分の手札を3枚まで選び、トラッシュする。（必ず1枚はトラッシュする。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587054,
				tcgplayer: 571508,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Ultra Rare",
};

export default card;
