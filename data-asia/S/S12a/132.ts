import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "うねりの扇",
		'zh-tw': "潮漩之扇",
		th: "พัดหมุนวน",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "相手の場のポケモンについている特殊エネルギーを1個選び、相手の山札の下にもどす。",
		'zh-tw': "選擇1個對手的場上寶可夢身上附加的特殊能量，放回對手的牌庫下方。",
		th: "เลือกพลังงานพิเศษที่ติดกับโปเกมอนบนกระดานฝ่ายตรงข้าม 1 ลูก ใส่คืนด้านล่างสุดของสำรับการ์ดฝ่ายตรงข้าม",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687694,
				tcgplayer: 571670,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577490,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "None",
};

export default card;
