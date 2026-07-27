import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "エネくじ",
		'zh-tw': "能量籤",
	},

	illustrator: "ORBITALLINK Inc.",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から7枚見る。その中にあるエネルギーを1枚、相手に見せてから、手札に加えてよい。残りのカードは山札にもどして切る。",
		'zh-tw': "查看自己的牌庫上方7張卡。選擇其中1張能量卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651119,
				tcgplayer: 569903,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
