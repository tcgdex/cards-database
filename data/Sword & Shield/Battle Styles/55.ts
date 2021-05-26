import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Spoink",
		fr: "Spoink"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			en: "Power Gem",
			fr: "Rayon Gemme"
		},

		damage: 30,
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

	retreat: 1
}

export default card