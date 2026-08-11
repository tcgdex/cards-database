import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "哈約克"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "覆蓋身體的黑色體毛既厚實又有彈性，就連 銳利的獠牙也會被反彈。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "後踢"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "頭突"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card