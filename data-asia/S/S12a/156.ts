import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "チェレンの気くばり",
		'zh-tw': "黑連的關心",
		th: "ความใส่ใจของเชเรน",
	},

	illustrator: "Yusuke Ohmura",
	category: "Trainer",

	effect: {
		ja: "ダメカンがのっている自分の[C]ポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、手札にもどす。",
		'zh-tw': "選擇1隻自己的身上放置有傷害指示物的【無】寶可夢，將那隻寶可夢與附加的卡，全部放回手牌。",
		th: "เลือกโปเกมอน[ไร้สี]ฝ่ายเรา 1 ตัวที่มีตัวนับแดเมจวางอยู่ นำโปเกมอนนั้นและการ์ดทั้งหมดที่ติดอยู่กลับขึ้นมือ",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687718,
				tcgplayer: 571694,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577511,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "None",
};

export default card;
