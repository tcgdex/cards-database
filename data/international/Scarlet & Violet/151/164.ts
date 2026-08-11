import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Lunettes de Protection",
		'en-us': "Protective Goggles",
		'es-es': "Gafas de Seguridad",
		'it-it': "Visieraprotettiva",
		'pt-br': "Óculos Protetores",
		'de-de': "Sicherheitsbrille"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Le Pokémon de base auquel cette carte est attachée n'a pas de Faiblesse.",
		'en-us': "The Basic Pokémon this card is attached to has no Weakness.",
		'es-es': "El Pokémon Básico al que esté unida esta carta no tiene ninguna Debilidad.",
		'it-it': "Il Pokémon Base a cui è assegnata questa carta non ha debolezza.",
		'pt-br': "O Pokémon Básico ao qual esta carta está ligada não tem Fraqueza.",
		'de-de': "Das Basis-Pokémon, an das diese Karte angelegt ist, hat keine Schwäche."
	},

	trainerType: "Tool",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733759,
				tcgplayer: 516726,
				cardtrader: 261209
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733759,
				tcgplayer: 516726,
				cardtrader: 261209
			}
		},
	],

	illustrator: "Toyste Beach",

	
}

export default card
