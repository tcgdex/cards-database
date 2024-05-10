import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電擊獸",
		th: "เอเลบู"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "很多發電廠會用地面屬性的寶可夢當守衛，藉以對抗 想伺機偷吃電力的電擊獸。",
		th: "มีโรงผลิตไฟฟ้าจำนวนมากที่วางโปเกมอนดินไว้เพื่อรับมือกับเอเลบูที่หมายตาพลังงานไฟฟ้า"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劈打",
			th: "สับ"
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "麻麻拳",
			th: "หมัดช็อตแปล๊บ ๆ"
		},

		damage: 50,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card