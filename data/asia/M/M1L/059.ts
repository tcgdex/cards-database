import { Card } from "models/database/card";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ファイトゴング",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札からタイプのたねポケモンまたは「基本エネルギー」を1枚選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 840354,
		tcgplayer: 647168,
	},
};

export default card;