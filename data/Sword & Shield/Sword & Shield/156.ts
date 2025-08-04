import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Air Balloon",
		fr: "Ballon",
		es: "Globo Helio",
		it: "Palloncino",
		pt: "Balão de Ar",
		de: "Luftballon"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "The Retreat Cost of the Pokémon this card is attached to is ColorlessColorless less.",
		fr: "Le Coût de Retraite du Pokémon auquel cette carte est attachée est diminué de ColorlessColorless.",
		es: "El Coste de Retirada del Pokémon al que está unida esta carta es de ColorlessColorless menos.",
		it: "Il costo di ritirata del Pokémon a cui è assegnata questa carta è ridotto di ColorlessColorless.",
		pt: "O custo de Recuo do Pokémon ao qual esta carta está ligada é ColorlessColorless a menos.",
		de: "Die Rückzugskosten des Pokémon, an das diese Karte angelegt ist, verringern sich um ColorlessColorless."
	},

	trainerType: "Tool",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 436874,
		tcgplayer: 208479
	}
}

export default card
