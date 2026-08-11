import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙包蛇",
		th: "ซึนะเฮบิ"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "會從鼻孔噴射出沙子，趁敵人看不清的時候躲進地底下藏身。",
		th: "พ่นทรายออกมาจากรูจมูก ฉวยโอกาสตอนที่ทำให้ศัตรูตาพร่ามัว มุดลงไปใต้ดินซ่อนตัว"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "擺尾拍擊",
			th: "สะบัดหาง"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "泥巴射擊",
			th: "มัดช็อต"
		},

		damage: 60,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card