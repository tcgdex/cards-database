import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 風速狗",
		th: "ฮิซุย วินดี"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "將猛烈燃燒的火焰纏繞在牙齒上撲向獵物。 雖然體型很大，卻能以靈巧的假動作戲弄敵手， 那姿態就像是舞蹈一般。",
		th: "เอาเปลวเพลิงลุกโชนคลุมเขี้ยวไว้แล้วกัดไม่ปล่อย มีรูปร่างใหญ่โต แต่ท่วงท่าที่หันเหความสนใจได้อย่างคล่องแคล่วเพื่อหลอกล่อศัตรูนั้นประดุจดังการแสดงร่ายรำ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "城破突圍",
			th: "จนตรอก"
		},

		effect: {
			'zh-tw': "若自己1張手牌都沒有，則增加150點傷害。",
			th: "ถ้าบนมือฝ่ายเราไม่มีการ์ดเลยแม้แต่ 1 ใบ การโจมตีนี้จะเพิ่มแดเมจอีก 150"
		},

		damage: "10+"
	}, {
		name: {
			'zh-tw': "銳利之牙",
			th: "เขี้ยวคม"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card