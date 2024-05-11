import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "土台龜",
		th: "โดไดโทส"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	description: {
		'zh-tw': "有時候小型的寶可夢們會聚集起來，在一動不動的 土台龜背上築起巢穴。",
		th: "บางครั้งบรรดาโปเกมอนขนาดเล็กจะมารวมตัวกันสร้างรังอยู่บนหลังโดไดโทสที่อยู่นิ่งไม่ขยับตัว"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "進化壓制",
			th: "อีโวเพรส"
		},

		effect: {
			'zh-tw': "造成自己的場上進化寶可夢的數量×50點傷害。",
			th: "แดเมจจะเท่ากับจำนวนโปเกมอนวิวัฒนาการบนกระดานฝ่ายเรา x50"
		},

		damage: "50×",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "頭突",
			th: "ตบหนัก"
		},

		damage: 160,
		cost: ["Grass", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card