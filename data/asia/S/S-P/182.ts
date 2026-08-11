import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウッウロボ",
		'zh-tw': "妙蛙種子",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分の手札からグッズを1枚トラッシュしなければ使えない。コインを1回投げオモテなら、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 570877,
				tcgplayer: 597380,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Promo",
};

export default card;
