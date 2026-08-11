import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ふくよかミュージシャン",
		'zh-tw': "仙子伊布",
	},

	illustrator: "Hirotaka Marufuji",
	category: "Trainer",

	effect: {
		ja: "好きな歌を歌いながら、自分の山札を3枚引く。相手は、その歌が上手だと思ったら、はくしゅをしてもよい。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525280,
				tcgplayer: 597320,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
