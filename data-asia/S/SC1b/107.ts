import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "破破袋"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "喜歡不衛生的地方。如果不及時清理家裡的垃圾，破破袋就會過來居住。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "毒液衝擊"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加50點傷害。"
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
