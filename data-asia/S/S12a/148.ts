import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "アクロマの実験",
		'zh-tw': "阿克羅瑪的實驗",
		th: "การทดลองของอโครมา",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から5枚見て、その中からカードを3枚選び、手札に加える。残りのカードはロストゾーンに置く。",
		'zh-tw': "查看自己的牌庫上方5張卡，選擇其中3張卡加入手牌。將剩餘卡放置於放逐區。",
		th: "ดูการ์ด 5 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ด 3 ใบจากในนั้น นำขึ้นมือ การ์ดที่เหลือวางไว้ที่ลอสต์โซน",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687710,
				tcgplayer: 571686,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577505,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "None",
};

export default card;
