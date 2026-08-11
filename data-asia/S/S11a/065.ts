import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ふりそで",
		'zh-tw': "長袖和服少女",
	},

	illustrator: "Yusuke Ohmura",
	category: "Trainer",

	effect: {
		ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。のぞむなら、出したポケモンとバトルポケモンを入れ替える。",
		'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。若希望，將剛放置的寶可夢與戰鬥寶可夢互換。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673063,
				tcgplayer: 570828,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570910,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Common",
};

export default card;
