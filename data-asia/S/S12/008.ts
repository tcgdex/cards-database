import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "畢力吉翁",
		th: "วิริซิออน"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "與勾帕路翁和代拉基翁並肩保護合眾地區寶可夢 的傳說一直流傳至今。",
		th: "มีตำนานเล่าขานว่า เคยร่วมมือกับโคบัลออนและเทราคิออนคอยเฝ้าคุ้มครองเหล่าโปเกมอนในภูมิภาคอิชชูอยู่เรื่อยมา"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "同心協力",
			th: "สี่รวมเป็นหนึ่ง"
		},

		effect: {
			'zh-tw': "若自己的備戰區有「勾帕路翁」「代拉基翁」「凱路迪歐」，則增加70點傷害。",
			th: "ถ้าบนเบนช์ฝ่ายเรามี [โคบัลออน] [เทราคิออน] [เคลดิโอ] อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 70"
		},

		damage: "20+",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "綠葉吸取",
			th: "ลีฟเดรน"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「20」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [20]"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card