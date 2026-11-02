import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ダークパッチ",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから「基本[悪]エネルギー」を1枚選び、ベンチの[悪]ポケモンにつける。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657077,
				tcgplayer: 570761,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Mega Hyper Rare",
};

export default card;
