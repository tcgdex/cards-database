import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Windup Arm",
		'fr-fr': "Bras à Remontoir",
		'es-es': "Brazo Mecánico",
		'it-it': "Braccio Caricato",
		'pt-br': "Braço de Corda",
		'de-de': "Aufzieharm"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "The Pokémon this card is attached to can attack even if it's Asleep or Paralyzed.",
		'fr-fr': "Le Pokémon auquel cette carte est attachée peut attaquer même s'il est Endormi ou Paralysé.",
		'es-es': "El Pokémon al que esté unida esta carta puede atacar incluso si está Dormido o Paralizado.",
		'it-it': "Il Pokémon a cui è assegnata questa carta può attaccare anche se è addormentato o paralizzato.",
		'pt-br': "O Pokémon ao qual esta carta está ligada pode atacar mesmo se estiver Adormecido ou Paralisado.",
		'de-de': "Das Pokémon, an das diese Karte angelegt ist, kann angreifen, auch wenn es schläft oder paralysiert ist."
	},

	trainerType: "Tool",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 670822,
				tcgplayer: 284106
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 670822,
				tcgplayer: 284106
			}
		},
	],
}

export default card
