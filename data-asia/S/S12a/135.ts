import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ダークパッチ",
		'zh-tw': "暗黑修正檔",
		th: "ดาร์กแพตช์",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから「基本[悪]エネルギー」を1枚選び、ベンチの[悪]ポケモンにつける。",
		'zh-tw': "從自己的棄牌區選擇1張「基本【惡】能量」卡，附於備戰區的【惡】寶可夢身上。",
		th: "เลือกการ์ด [พลังงานพื้นฐาน[ความมืด]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอน[ความมืด]บนเบนช์",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687697,
				tcgplayer: 571673,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577493,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "None",
};

export default card;
