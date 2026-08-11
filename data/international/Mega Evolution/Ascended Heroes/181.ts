import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Air Balloon",
		'fr-fr': "Ballon",
		'es-es': "Globo Helio",
		'es-mx': "Globo con Helio",
		'de-de': "Luftballon",
		'it-it': "Palloncino",
		'pt-br': "Balão de Ar"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "The Retreat Cost of the Pokémon this card is attached to is {C}{C} less.",
		'fr-fr': "Le Coût de Retraite du Pokémon auquel cette carte est attachée est diminué de {C}{C}.",
		'es-es': "El Coste de Retirada del Pokémon al que esté unida esta carta es de {C}{C} menos.",
		'es-mx': "El Costo de Retirada del Pokémon al que esté unida esta carta es de {C}{C} menos.",
		'de-de': "Die Rückzugskosten des Pokémon, an das diese Karte angelegt ist, verringern sich um {C}{C}.",
		'it-it': "Il costo di ritirata del Pokémon a cui è assegnata questa carta è ridotto di {C}{C}.",
		'pt-br': "O Custo de Recuo do Pokémon ao qual esta carta está ligada é {C}{C} a menos."
	},

	trainerType: "Tool",
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869792,
			tcgplayer: 675993
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869792,
			tcgplayer: 675993
		}
	},
],
}

export default card