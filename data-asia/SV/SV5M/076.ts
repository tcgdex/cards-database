import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蟲電寶",
		th: "เด็นจิมูชิ"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'zh-tw': "用結實的外殼保護自己。會從顎部的尖端 放出電流反擊對手。",
		th: "ปกป้องร่างกายด้วยกระดองทนทาน ปล่อยกระแสไฟจากปลายกรามเพื่อตอบโต้"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劈哩啪啦",
			th: "ประกายไฟ"
		},

		damage: 60,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card