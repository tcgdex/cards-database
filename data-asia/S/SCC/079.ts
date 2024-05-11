import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泥偶巨人"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		'zh-tw': "雖然有人認為牠體內有著生成能量的永動機，但至今仍未得到證實。"
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
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card