import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Xerneas BREAK",
		'fr-fr': "Xerneas TURBO",
		'es-es': "Xerneas TURBO",
		'it-it': "Xerneas TURBO",
		'pt-br': "Xerneas TURBO",
		'de-de': "Xerneas-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		716,
	],

	hp: 150,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Xerneas",
		'fr-fr': "Xerneas",
		'es-es': "Xerneas",
		'it-it': "Xerneas",
		'pt-br': "Xerneas",
		'de-de': "Xerneas"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
			],
			name: {
				'en-us': "Life Stream",
				'fr-fr': "Flux Vital",
				'es-es': "Flujo de Vida",
				'it-it': "Flusso Creativo",
				'pt-br': "Fluxo de Vida",
				'de-de': "Strom des Lebens"
			},
			effect: {
				'en-us': "This attack does 20 damage times the amount of Energy attached to all of your Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous vos Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida a todos tus Pokémon.",
				'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata ai tuoi Pokémon.",
				'pt-br': "Este ataque causa 20 de danos vezes a quantidade de Energia ligada a todos os seus Pokémon.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte für jede an deine Pokémon angelegte Energie zu."
			},
			damage: "20×",

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 291546,
		tcgplayer: 121208
	}
}

export default card
