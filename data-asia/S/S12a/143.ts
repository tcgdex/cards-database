import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "レベルボール",
		'zh-tw': "等級球",
		th: "เลเวลบอล",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "自分の山札から、HPが「90」以下のポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇1張HP為「90」以下的寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		th: "เลือกการ์ดโปเกมอนที่มี HP ไม่เกิน [90] 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687705,
				tcgplayer: 571681,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577501,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "None",
};

export default card;
