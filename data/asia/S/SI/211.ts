import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 蔥遊兵"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "會用堅硬的蔥葉抵擋攻擊， 接著用鋒利的莖反擊。 牠的蔥既是武器也是食材。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "啄"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "蔥之強襲"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有「寶可夢道具」，則增加90點傷害。這個情況下，這個招式的傷害不計算抵抗力。"
		},

		damage: "70+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card