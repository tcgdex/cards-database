import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Air Balloon",
		'fr-fr': "Ballon",
		'de-de': "Luftballon",
		'it-it': "Palloncino",
		'es-es': "Globo Helio",
		'pt-br': "Balão de Ar",
		'es-mx': "Globo con Helio"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "The Retreat Cost of the Pokémon this card is attached to is {C}{C} less.",
		'fr-fr': "Le Coût de Retraite du Pokémon auquel cette carte est attachée est diminué de {C}{C}.",
		'de-de': "Die Rückzugskosten des Pokémon, an das diese Karte angelegt ist, verringern sich um {C}{C}.",
		'it-it': "Il costo di ritirata del Pokémon a cui è assegnata questa carta è ridotto di {C}{C}.",
		'es-es': "El Coste de Retirada del Pokémon al que esté unida esta carta es de {C}{C} menos.",
		'pt-br': "O Custo de Recuo do Pokémon ao qual esta carta está ligada é {C}{C} a menos.",
		'es-mx': "El Costo de Retirada del Pokémon al que esté unida esta carta es de {C}{C} menos."
	},

	trainerType: "Tool",
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851237,
				tcgplayer: 654505
			}
		},
	],
}

export default card
