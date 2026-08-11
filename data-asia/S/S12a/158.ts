import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ナタネの活気",
		'zh-tw': "菜種的活力",
		th: "ความสดใสของนาทาเนะ",
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。その後、自分の手札から[G]エネルギーを2枚まで選び、ベンチポケモン1匹につける。",
		'zh-tw': "從自己的牌庫抽出2張卡。然後，從自己的手牌選擇最多2張【草】能量卡，附於1隻備戰寶可夢身上。",
		th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา หลังจากนั้น เลือกการ์ดพลังงาน[หญ้า]ได้สูงสุด 2 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนบนเบนช์ 1 ตัว",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687720,
				tcgplayer: 571696,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577513,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "None",
};

export default card;
