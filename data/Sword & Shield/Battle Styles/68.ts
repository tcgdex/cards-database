import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Onix",
		fr: "Onix"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Rocky Tackle",
			fr: "Tacle Rocailleux"
		},

		effect: {
			en: "This Pokémon also does 60 damage to itself.",
			fr: "Ce Pokémon s’inflige aussi 60 dégâts."
		},

		damage: 170,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card