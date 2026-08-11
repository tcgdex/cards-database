import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Air Balloon",
		'fr-fr': "Ballon",
		'es-es': "Globo Helio",
		'it-it': "Palloncino",
		'pt-br': "Balão de Ar",
		'de-de': "Luftballon"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "The Retreat Cost of the Pokémon this card is attached to is ColorlessColorless less.",
		'fr-fr': "Le Coût de Retraite du Pokémon auquel cette carte est attachée est diminué de ColorlessColorless.",
		'es-es': "El Coste de Retirada del Pokémon al que está unida esta carta es de ColorlessColorless menos.",
		'it-it': "Il costo di ritirata del Pokémon a cui è assegnata questa carta è ridotto di ColorlessColorless.",
		'pt-br': "O custo de Recuo do Pokémon ao qual esta carta está ligada é ColorlessColorless a menos.",
		'de-de': "Die Rückzugskosten des Pokémon, an das diese Karte angelegt ist, verringern sich um ColorlessColorless."
	},

	trainerType: "Tool",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 439503,
		tcgplayer: 208480
	}
}

export default card
