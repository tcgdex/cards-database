import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "萌虻",
		th: "อบูรี"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		'zh-tw': "花粉和花蜜是萌虻的最愛。為了採集幼棉棉的花粉， 萌虻會在牠們附近飛來飛去。",
		th: "ชอบเกสรดอกไม้หรือน้ำผึ้งมาก อบูรีจะบินวนใกล้ ๆ เพื่อเล็งเอาเกสรดอกไม้ของฮิเมงกะ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "小吸取",
			th: "สมอลเดรน"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「10」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [10]"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card