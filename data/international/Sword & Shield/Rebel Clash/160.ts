import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Galar Mine",
		'fr-fr': "Mine de Galar",
		'es-es': "Mina de Galar",
		'it-it': "Miniera di Galar",
		'pt-br': "Mina de Galar",
		'de-de': "Galar-Mine 1"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "The Retreat Cost of both Active Pokémon is ColorlessColorless more.",
		'fr-fr': "Le Coût de Retraite des deux Pokémon Actifs est augmenté de ColorlessColorless.",
		'es-es': "El Coste de Retirada de ambos Pokémon Activos es de ColorlessColorless más.",
		'it-it': "Il costo di ritirata di entrambi i Pokémon attivi aumenta di ColorlessColorless.",
		'pt-br': "O custo de Recuo de ambos os Pokémon Ativos é ColorlessColorless a mais.",
		'de-de': "Die Rückzugskosten beider Aktiven Pokémon erhöhen sich um ColorlessColorless."
	},

	trainerType: "Stadium",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458193,
				tcgplayer: 213263
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458193,
				tcgplayer: 213263
			}
		},
	],
}

export default card
