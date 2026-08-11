import { Card } from "models/database/card";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "夜のタンカ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュからポケモンまたは基本エネルギーを1枚選び、相手に見せて、手札に加える。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Ultra Rare",

	thirdParty: {
		cardmarket: 840378,
		tcgplayer: 647192,
	},
};

export default card;