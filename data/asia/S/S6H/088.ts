import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "アスナ",
	},

	illustrator: "Ryta Fuse",
	category: "Trainer",

	effect: {
		ja: "相手の場のポケモンについている「特殊エネルギー」と場に出ている「スタジアム」を1枚ずつ選び、トラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560964,
				tcgplayer: 569220,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Hyper rare",
};

export default card;
