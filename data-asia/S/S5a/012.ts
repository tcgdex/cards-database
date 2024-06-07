import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毒刺水母",
		th: "โดคุคุราเกะ"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "透過讓紅色珠子發光來與夥伴交流。閃爍的光芒是用來通知警戒狀況的信號。",
		th: "สื่อสารกับพวกพ้องด้วยการปล่อยแสงจากลูกบอลสีแดง และส่งไฟกระพริบเป็นสัญญาณเตือนแจ้งระวังภัย"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "飛濺",
			th: "สแปลช"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "毒獄",
			th: "พิษจองจำ"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ [พิษ] ในเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้จะหนีไม่ได้"
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card