import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈箭鷹"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "緊抓"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "火藥奇襲"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有【火】能量，則增加80點傷害。"
		},

		damage: "80+",
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

	retreat: 0,
	regulationMark: "E"
}

export default card