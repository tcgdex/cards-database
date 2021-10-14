import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Sekio",
	category: "Pokemon",

	description: {
		en: "When attacked by bird Pokémon, it resists by releasing a terrifically strong odor from its antennae, but it often becomes their prey."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Surprise Attack"
		},

		damage: "20",

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Caterpie"
	},

	rarity: "None",
	hp: 50,
	types: ["Grass"]
}

export default card