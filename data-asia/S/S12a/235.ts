import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "アクロマの実験",
		'zh-tw': "阿克羅瑪的實驗",
	},

	illustrator: "kantaro",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から5枚見て、その中からカードを3枚選び、手札に加える。残りのカードはロストゾーンに置く。",
		'zh-tw': "查看自己的牌庫上方5張卡，選擇其中3張卡加入手牌。將剩餘卡放置於放逐區。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687797,
				tcgplayer: 571773,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Special illustration rare",
};

export default card;
