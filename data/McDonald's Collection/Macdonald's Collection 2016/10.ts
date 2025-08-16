import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",

	description: {
		en: "Its whiskers serve as antennas. By sending and receiving electrical waves, it can communicate with others over vast distances."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Nuzzle"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed."
		}
	}, {
		name: {
			en: "Spiral Drain"
		},

		damage: 60,

		effect: {
			en: "Heal 20 damage from this Pokémon."
		}
	}],

	name: {
		en: "Dedenne"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275066
	}
}

export default card