import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "アクロマの実験",
		'zh-tw': "阿克羅瑪的實驗",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から5枚見て、その中からカードを3枚選び、手札に加える。残りのカードはロストゾーンに置く。",
		'zh-tw': "查看自己的牌庫上方5張卡，選擇其中3張卡加入手牌。將剩餘卡放置於放逐區。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667970,
				tcgplayer: 570026,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
