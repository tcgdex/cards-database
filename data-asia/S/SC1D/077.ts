import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多龍梅西亞"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "曾經棲息在古代的大海。在重生為幽靈寶可夢後，會在昔日的住處徘徊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電光一閃"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加10點傷害。"
		},

		damage: "10+",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
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
