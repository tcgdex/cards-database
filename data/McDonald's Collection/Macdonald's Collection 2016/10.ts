import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",

	description: {
		en: "Its whiskers serve as antennas. By sending and receiving electrical waves, it can communicate with others over vast distances."
	},
	
	hp: 70,

	stage: "Basic",

	attacks: [{
		name: {
			en: "Nuzzle",
			fr: "Frotte-Frimousse"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		}
	}, {
		name: {
			en: "Spiral Drain",
			fr: "Spirale Épuisante"
		},

		damage: 60,

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon."
		}
	}],

	name: {
		en: "Dedenne",
		fr: "Dedenne"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275066
	}
}

export default card