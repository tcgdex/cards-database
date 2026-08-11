import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カミツレのきらめき",
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の「フュージョン」のポケモンを2匹まで選び、山札から「フュージョンエネルギー」を1枚ずつつける。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576191,
				tcgplayer: 569614,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Ultra Rare",
};

export default card;
