import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "岩殿居蟹"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "厚實的鉗子是牠最大的武器。硬度高到甚至能讓超甲狂犀的護具裂開。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "強化拳"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有「寶可夢道具」，則增加90點傷害。"
		},

		damage: "60+",
		cost: ["Psychic", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "百萬噸墜落"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 190,
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card