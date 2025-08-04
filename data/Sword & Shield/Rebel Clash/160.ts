import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galar Mine",
		fr: "Mine de Galar",
		es: "Mina de Galar",
		it: "Miniera di Galar",
		pt: "Mina de Galar",
		de: "Galar-Mine 1"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "The Retreat Cost of both Active Pokémon is ColorlessColorless more.",
		fr: "Le Coût de Retraite des deux Pokémon Actifs est augmenté de ColorlessColorless.",
		es: "El Coste de Retirada de ambos Pokémon Activos es de ColorlessColorless más.",
		it: "Il costo di ritirata di entrambi i Pokémon attivi aumenta di ColorlessColorless.",
		pt: "O custo de Recuo de ambos os Pokémon Ativos é ColorlessColorless a mais.",
		de: "Die Rückzugskosten beider Aktiven Pokémon erhöhen sich um ColorlessColorless."
	},

	trainerType: "Stadium",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 458193,
		tcgplayer: 213263
	}
}

export default card
