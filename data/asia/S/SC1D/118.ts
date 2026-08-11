import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨鉗螳螂"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "為了防止戰鬥時變得過熱，而令金屬的身體熔化，會使用翅膀調節體溫。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "襲擊"
		},

		effect: {
			'zh-tw': "在這個回合，若這隻寶可夢從「飛天螳螂」進化，則增加90點傷害。"
		},

		damage: "30+",
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "防守利爪"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。"
		},

		damage: 90,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
