import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ハンディサーキュレーター",
		'zh-tw': "手持循環扇",
		th: "แฮนดี้เซอร์คูเลเตอร์",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンについているエネルギーを1個選び、相手のベンチポケモンにつけ替える。",
		'zh-tw': "附有這張卡的寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，選擇1個使用招式的寶可夢身上附加的能量，改附於對手的備戰寶可夢身上。",
		th: "เมื่อโปเกมอนที่ติดการ์ดนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม เลือกพลังงานที่ติดอยู่กับโปเกมอนที่ใช้ท่าต่อสู้ 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์ฝ่ายตรงข้าม",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767188,
				tcgplayer: 568085,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
