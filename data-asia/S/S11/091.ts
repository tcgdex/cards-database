import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ツールボックス",
		'zh-tw': "道具箱",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から7枚見て、その中から「ポケモンのどうぐ」を好きなだけ選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
		'zh-tw': "查看自己的牌庫上方7張卡，從其中選擇任意數量的「寶可夢道具」，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667966,
				tcgplayer: 570022,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
