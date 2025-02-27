import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドロンチ",
		id: "Drakloak",
		th: "โดรอนจิ",
		'zh-tw': "多龍奇",
		'zh-cn': "多龍奇"
	},

	illustrator: "cochi8i",
	rarity: "None",
	category: "Pokemon",
	dexId: [886],
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "肺に エネルギーを溜め 撃ち出す。 ドラメシヤが 立派に 育つまで 一緒に 戦い 世話もする。",
		id: "Drakloak mengumpulkan energi di paru-parunya lalu menembakkannya. Ia merawat dan bertarung bersama Dreepy hingga Dreepy itu tumbuh dengan baik.",
		th: "เก็บสะสมพลังงานไว้ในปอดแล้วยิงออกไป จะคอยช่วยเหลือและต่อสู้ร่วมกับโดราเมชิยะจนกว่าพวกมันจะเติบโตได้อย่างงดงาม",
		'zh-tw': "會用儲存在肺部的能量進行攻擊。 在多龍梅西亞能獨當一面前， 都會一起戰鬥並照顧起居。",
		'zh-cn': "會用儲存在肺部的能量進行攻擊。 在多龍梅西亞能獨當一面前， 都會一起戰鬥並照顧起居。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ていさつしれい",
			id: "Perintah Rekonaisans",
			th: "คำสั่งสอดแนม",
			'zh-tw': "偵查指令",
			'zh-cn': "偵查指令"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札を上から2枚見て、どちらか1枚を選び、手札に加える。残りのカードは、山札の下にもどす。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Lihat 2 kartu dari atas Deck sendiri, pilih salah satu, lalu tambahkan ke Kartu Pegangan. Kembalikan sisa kartu ke bawah Deck.",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ดูการ์ด 2 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกใบใดใบหนึ่ง 1 ใบ นำขึ้นมือ การ์ดที่เหลือ ใส่กลับไปด้านล่างของสำรับการ์ด",
			'zh-tw': "在自己的回合時可使用1次。查看自己的牌庫上方2張卡，選擇其中1張，加入手牌。將剩餘卡放回牌庫下方。",
			'zh-cn': "在自己的回合時可使用1次。查看自己的牌庫上方2張卡，選擇其中1張，加入手牌。將剩餘卡放回牌庫下方。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Psychic"],

		name: {
			ja: "リューズヘッド",
			id: "Sundulan Naga",
			th: "หัวมังกรคู่",
			'zh-tw': "龍之頭擊",
			'zh-cn': "龍之頭擊"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card