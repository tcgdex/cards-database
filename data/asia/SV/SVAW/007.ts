import { Card } from "models/database/card"
import Set from "../SVAW"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飄飄雛",
		'th-th': "ฮิราฮินะ",
		'id-id': "Flittle"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		'zh-tw': "從肚子的褶邊放射出的精神力量，能夠讓牠浮在腳尖和地面 距離僅有區區１公分的空中。",
		'th-th': "พลังจิตที่ปลดปล่อยออกมาจากส่วนที่พลิ้วไหวบริเวณท้องจะทำให้นิ้วเท้าลอยจากพื้นเพียง 1 เซนติเมตร",
		'id-id': "Dengan kekuatan psikokinesis yang dipancarkan dari embel-embel di perutnya, ujung kaki Flittle melayang di udara hanya setinggi 1 cm."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞",
			'th-th': "กระแทก",
			'id-id': "Menyeruduk"
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card