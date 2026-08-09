import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジバコイル",
		'zh-tw': "自爆磁怪",
		th: "จิบะคอยล์",
	},

	illustrator: "zig",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		ja: "頭の アンテナで 宇宙からの 電波を 受信して 何者かに コントロールされていると いわれる。",
		'zh-tw': "據說牠頭上的天線會接收來自宇宙的電波， 讓牠被未知的對象控制。",
		th: "ว่ากันว่ามันรับคลื่นสัญญาณที่ส่งมาจากอวกาศผ่านเสาอากาศบนหัว และถูกอะไรบางอย่างควบคุมอยู่",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ギガマグネット",
				'zh-tw': "終極磁鐵",
				th: "กิก้าแมกเน็ท",
			},
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から6枚見て、その中から[M]エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。",
				'zh-tw': "在自己的回合時，可使用1次。查看自己的牌庫上方6張卡，從其中選擇任意數量的【鋼】能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡放回牌庫並重洗。",
				th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ดูการ์ด 6 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดพลังงาน[โลหะ]จากในนั้นตามจำนวนที่ชอบแล้วติดที่โปเกมอนฝ่ายเราตามชอบ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "パワービーム",
				'zh-tw': "强力光束",
				th: "พาวเวอร์บีม",
			},
			damage: 120,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687658,
				tcgplayer: 571634,
			},
		},
	],

	evolveFrom: {
		ja: "レアコイル",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "None",
	dexId: [462],
};

export default card;
