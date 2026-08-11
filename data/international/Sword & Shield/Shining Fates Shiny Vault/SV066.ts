import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [867],
	set: Set,

	name: {
		'fr-fr': "Tutétékri de Galar",
		'en-us': "Galarian Runerigus",
		'es-es': "Runerigus de Galar",
		'it-it': "Runerigus di Galar",
		'pt-br': "Runerigus de Galar",
		'de-de': "Galar-Oghnatoll"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'fr-fr': "Tutafeh de Galar",
		'en-us': "Galarian Yamask"
	},

	attacks: [{
		name: {
			'fr-fr': "Mépris Réparti",
			'en-us': "Spreading Spite",
			'es-es': "Esparcir Rencor",
			'it-it': "Spargidispetti",
			'pt-br': "Disseminar Rancor",
			'de-de': "Boshafte Ausbreitung"
		},

		effect: {
			'fr-fr': "Pour chaque marqueur de dégâts sur ce Tutétékri de Galar, placez 2 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			'en-us': "For each damage counter on this Galarian Runerigus, put 2 damage counters on your opponent's Pokémon in any way you like.",
			'es-es': "Por cada contador de daño en este Runerigus de Galar, pon 2 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			'it-it': "Per ogni segnalino danno presente su questo Runerigus di Galar, metti due segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			'pt-br': "Para cada contador de dano neste Runerigus de Galar, coloque 2 contadores de dano nos Pokémon do seu oponente como desejar.",
			'de-de': "Lege für jede Schadensmarke auf diesem Galar-Oghnatoll 2 Schadensmarken beliebig auf die Pokémon deines Gegners."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'fr-fr': "Marteau en Folie",
			'en-us': "Mad Hammer",
			'es-es': "Martillo Enloquecido",
			'it-it': "Martello Pazzo",
			'pt-br': "Martelo Insano",
			'de-de': "Verrückter Hammer"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'en-us': "This Pokémon also does 30 damage to itself.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 120,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "A powerful curse was woven into an ancient painting. After absorbing the spirit of a Yamask, the painting began to move."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539718,
				tcgplayer: 232436
			}
		},
	],
}

export default card
