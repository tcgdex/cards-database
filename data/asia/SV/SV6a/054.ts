import { Card } from "models/database/card";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デンジャラス光線",
		'zh-tw': "危險光線",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'ja-jp': "相手のバトルポケモンをやけどとこんらんにする。",
		'zh-tw': "將對手的戰鬥寶可夢【灼傷】與【混亂】。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773803,
				tcgplayer: 566305,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "ACE SPEC Rare",
};

export default card;
