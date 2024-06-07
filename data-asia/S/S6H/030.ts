import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 呆呆獸"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "牠以只生長在伽勒爾地區的植物的種子為食，因此尾巴是辣味的。"
	},

	stage: "Basic",

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
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card