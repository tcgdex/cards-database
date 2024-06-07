import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多龍巴魯托"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		'zh-tw': "牠角裡的多龍梅西亞似乎滿心期待著能被以音速發射出去。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "匯流進擊"
		},

		effect: {
			'zh-tw': "造成自己的場上「匯流」寶可夢的數量×30點傷害。"
		},

		damage: "30×",
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "高速攻擊"
		},

		damage: 120,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
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