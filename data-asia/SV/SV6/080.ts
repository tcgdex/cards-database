import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ドロンチ",
		'zh-tw': "多龍奇",
		th: "โดรอนจิ",
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "肺に エネルギーを溜め 撃ち出す。 ドラメシヤが 立派に 育つまで 一緒に 戦い 世話もする。",
		'zh-tw': "會用儲存在肺部的能量進行攻擊。 在多龍梅西亞能獨當一面前， 都會一起戰鬥並照顧起居。",
		th: "เก็บสะสมพลังงานไว้ในปอดแล้วยิงออกไป จะคอยช่วยเหลือและต่อสู้ร่วมกับโดราเมชิยะจนกว่าพวกมันจะเติบโตได้อย่างงดงาม",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ていさつしれい",
				'zh-tw': "偵查指令",
				th: "คำสั่งสอดแนม",
			},
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から2枚見て、どちらか1枚を選び、手札に加える。残りのカードは、山札の下にもどす。",
				'zh-tw': "在自己的回合時可使用1次。查看自己的牌庫上方2張卡，選擇其中1張，加入手牌。將剩餘卡放回牌庫下方。",
				th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ดูการ์ด 2 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกใบใดใบหนึ่ง 1 ใบ นำขึ้นมือ การ์ดที่เหลือ ใส่กลับไปด้านล่างของสำรับการ์ด",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "リューズヘッド",
				'zh-tw': "龍之頭擊",
				th: "หัวมังกรคู่",
			},
			damage: 70,
			cost: ["Fire", "Psychic"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767173,
				tcgplayer: 568070,
			},
		},
	],

	evolveFrom: {
		ja: "ドラメシヤ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [886],
};

export default card;
