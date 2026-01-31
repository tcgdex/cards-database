import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		en: "Air Balloon",
		fr: "Ballon",
		de: "Luftballon",
		it: "Palloncino",
		pt: "Balão de Ar",
		es: "Globo Helio",
		'es-mx': "Globo con Helio"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "The Retreat Cost of the Pokémon this card is attached to is {C}{C} less.",
		fr: "Le Coût de Retraite du Pokémon auquel cette carte est attachée est diminué de {C}{C}.",
		de: "Die Rückzugskosten des Pokémon, an das diese Karte angelegt ist, verringern sich um {C}{C}.",
		it: "Il costo di ritirata del Pokémon a cui è assegnata questa carta è ridotto di {C}{C}.",
		pt: "O custo de Recuo do Pokémon ao qual esta carta está ligada é {C}{C} a menos.",
		es: "El Coste de Retirada del Pokémon al que esté unida esta carta es de {C}{C} menos.",
		'es-mx': "El Costo de Retirada del Pokémon al que esté unida esta carta es de {C}{C} menos."
	},

	trainerType: "Tool",
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836066
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836066
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836470
			}
		},
	]
}

export default card
