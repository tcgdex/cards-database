import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	dexId: [556],

	description: {
		en: "It uses an up-tempo song and dance to drive away the bird Pokémon that prey on its flower seeds."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue"
		},

		damage: 20,

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soigne 20 dégâts infligés à ce Pokémon."
		}
	}, {
		name: {
			en: "Pin Missile",
			fr: "Dard-Nuée"
		},

		damage: "20×",

		effect: {
			en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face."
		}
	}],

	name: {
		en: "Maractus",
		fr: "Maracachi"
	},

	rarity: "None",
	hp: 80,
	types: ["Grass"],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281791,
				tcgplayer: 87189
			}
		}
	]
}

export default card

