import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "河馬獸"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'zh-tw': "偶爾會有石子卡在身體的孔洞裡。因為石居蟹會幫忙把石子拿出來， 所以會用心地保護牠們。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 80,
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "沙之吐息"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card