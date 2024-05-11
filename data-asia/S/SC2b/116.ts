import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "姆克鳥"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'zh-tw': "棲息在森林和草原。如果遇上同類的團隊，就會開始爭奪地盤。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "伏擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。"
		},

		damage: "20+",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "翅膀攻擊"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
