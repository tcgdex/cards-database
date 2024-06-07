import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大嘴雀",
		th: "โอนิดริล"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "在大嘴雀的地盤上帶著食物走動是件危險的事，食物轉眼間就會被奪走。",
		th: "การถือของกินเดินเข้าไปในอาณาเขตของโอนิดริล เป็นเรื่องที่อันตรายอย่างยิ่ง เพราะจะถูกฉกแย่ง หายไปโดยที่ไม่ทันได้ตั้งตัว"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "啄鑽",
			th: "จะงอยสว่าน"
		},

		damage: 70,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card