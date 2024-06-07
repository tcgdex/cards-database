import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "哭哭面具"
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "古代人的靈魂變成了寶可夢。 為了尋找認得自己長相的人 而在遺跡裡徘徊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "不祥之眼"
		},

		effect: {
			'zh-tw': "在對手的1隻寶可夢身上放置3個傷害指示物。"
		},

		cost: ["Psychic", "Psychic"]
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
	regulationMark: "G"
}

export default card