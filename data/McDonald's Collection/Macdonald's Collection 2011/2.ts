import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	description: {
		en: "It uses an up-tempo song and dance to drive away the bird Pokémon that prey on its flower seeds."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mega Drain"
		},

		damage: 20,

		effect: {
			en: "Heal 20 damage from this Pokémon."
		}
	}, {
		name: {
			en: "Pin Missile"
		},

		damage: "20×",

		effect: {
			en: "Flip 4 coins. This attack does 20 damage times the number of heads."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Maractus"
	},

	rarity: "None",
	hp: 80,
	types: ["Grass"]
}

export default card