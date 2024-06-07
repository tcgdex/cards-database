import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "偽螳草",
		th: "คาริคิริ"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "最喜歡太陽光。會透過充分沐浴陽光，讓自己長得色彩鮮豔。",
		th: "ชอบแสงอาทิตย์เป็นอย่างยิ่ง จึงเลี้ยงให้มีสีสันสดใสได้ด้วยการให้อาบแดด"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連續斬",
			th: "สแลชต่อเนื่อง"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×20點傷害。",
			th: "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับ จำนวนครั้งที่ออกหัว x20"
		},

		damage: "20×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card