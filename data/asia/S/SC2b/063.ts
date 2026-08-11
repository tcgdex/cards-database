import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "河馬獸"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'zh-tw': "偶爾會有石子卡在身體的孔洞裡。因為石居蟹會幫忙把石子拿出來，所以會用心地保護牠們。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "三重粉碎"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×80點傷害。"
		},

		damage: "80×",
		cost: ["Fighting", "Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "大地粉碎"
		},

		damage: 150,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
