import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "カシオペア",
		'zh-tw': "仙后",
	},

	illustrator: "Atsushi Furusawa",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札がこのカード1枚だけのときにしか使えない。自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
		'zh-tw': "這張卡只有在自己的手牌只有這1張時才可使用。 從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773810,
				tcgplayer: 566312,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
