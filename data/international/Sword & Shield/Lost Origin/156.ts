import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Damage Pump",
		'fr-fr': "Pompe à Dégâts",
		'es-es': "Bomba de Daño",
		'it-it': "Pompadanni",
		'pt-br': "Bomba de Dano",
		'de-de': "Schadenspumpe"
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Move up to 2 damage counters from 1 of your Pokémon to your other Pokémon in any way you like.",
		'fr-fr': "Déplacez jusqu'à 2 marqueurs de dégâts de l'un de vos Pokémon vers vos autres Pokémon comme il vous plaît.",
		'es-es': "Mueve hasta 2 contadores de daño de 1 de tus Pokémon a tus otros Pokémon de la manera que desees.",
		'it-it': "Sposta fino a due segnalini danno da uno dei tuoi Pokémon ai tuoi altri Pokémon nel modo che preferisci.",
		'pt-br': "Mova até 2 contadores de dano de 1 dos seus Pokémon para outros Pokémon seus como desejar.",
		'de-de': "Verschiebe bis zu 2 Schadensmarken von 1 deiner Pokémon beliebig auf deine anderen Pokémon."
	},

	trainerType: "Item",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674164,
				tcgplayer: 284087
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674164,
				tcgplayer: 284087
			}
		},
	],
}

export default card
