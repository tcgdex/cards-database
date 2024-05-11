import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鴨嘴火獸",
		th: "บูเบอร์"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "會用火焰解決獵物。但是一不留神就會把獵物 燒得太焦，然後才後悔。",
		th: "จัดการเหยื่อด้วยเปลวเพลิง เผลอทีไรก็จะเผาเสียจนไหม้เกรียมและรู้สึกเสียใจภายหลัง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踢倒",
			th: "เตะเลียด"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "火拳",
			th: "หมัดอัคคี"
		},

		damage: 70,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card