import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Air Balloon",
		'fr-fr': "Ballon",
		'de-de': "Luftballon",
		'it-it': "Palloncino",
		'pt-br': "Balão de Ar",
		'es-es': "Globo Helio",
		'es-mx': "Globo con Helio"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "The Retreat Cost of the Pokémon this card is attached to is {C}{C} less.",
		'fr-fr': "Le Coût de Retraite du Pokémon auquel cette carte est attachée est diminué de {C}{C}.",
		'de-de': "Die Rückzugskosten des Pokémon, an das diese Karte angelegt ist, verringern sich um {C}{C}.",
		'it-it': "Il costo di ritirata del Pokémon a cui è assegnata questa carta è ridotto di {C}{C}.",
		'pt-br': "O custo de Recuo do Pokémon ao qual esta carta está ligada é {C}{C} a menos.",
		'es-es': "El Coste de Retirada del Pokémon al que esté unida esta carta es de {C}{C} menos.",
		'es-mx': "El Costo de Retirada del Pokémon al que esté unida esta carta es de {C}{C} menos."
	},

	trainerType: "Tool",
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836066,
				tcgplayer: 642531
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836066,
				tcgplayer: 642531
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836470,
				tcgplayer: 642771
			}
		},
	]
}

export default card
