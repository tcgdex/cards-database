import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "kirisAki",
	category: "Pokemon",

	dexId: [37],

	description: {
		en: "While young, it has six gorgeous tails. When it grows, several new tails are sprouted."
	},

	hp: 60,

	stage: "Basic",

	attacks: [{
		name: {
			en: "Roar",
			fr: "Hurlement"
		},

		effect: {
			en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc."
		}
	}, {
		name: {
			en: "Gnaw",
			fr: "Ronge"
		},

		damage: 10
	}],

	name: {
		en: "Vulpix",
		fr: "Goupix"
	},

	rarity: "None",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 295137,
				tcgplayer: 275057
			}
		}
	]
}

export default card