import { Card } from "../../../interfaces"
import Set from "../svAM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "斗笠菇",
		th: "คิโนกัซซา",
		id: "Breloom"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "會撒出毒孢子，然後再讓因吸入孢子而痛苦不堪的 對手吃上一記重拳。",
		th: "จะโปรยสปอร์พิษแล้วปล่อยหมัดรุนแรงชกฝ่ายตรงข้ามที่เจ็บปวดจากการสูดดมสปอร์พิษเข้าไป",
		id: "Breloom menyebarkan spora racun dan menyarangkan pukulan kuat pada lawan yang menderita karena menghirup spora tersebut."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "音速直擊",
			th: "มัคสเตรท",
			id: "Mach Straight"
		},

		damage: 60,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card