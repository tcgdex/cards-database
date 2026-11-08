import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Latias",
		'fr-fr': "Latias",
		'es-es': "Latias",
		'it-it': "Latias",
		'pt-br': "Latias",
		'de-de': "Latias"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		380,
	],

	hp: 120,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Energy Arrow",
				'fr-fr': "Flèche d’Énergie",
				'es-es': "Flecha Energía",
				'it-it': "Freccia Energetica",
				'pt-br': "Flecha de Energia",
				'de-de': "Energiepfeil"
			},
			effect: {
				'en-us': "This attack does 20 damage times the amount of Energy attached to 1 of your opponent’s Pokémon to that Pokémon. This damage isn’t affected by Weakness or Resistance.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à l’un des Pokémon de votre adversaire à ce Pokémon-là. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida a 1 de los Pokémon de tu rival a ese Pokémon. Este daño no se ve afectado por Debilidad o Resistencia.",
				'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni Energia assegnata a quello stesso Pokémon. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "Este ataque causa 20 pontos de dano vezes a quantidade de Energia ligada a 1 dos Pokémon do seu oponente àquele Pokémon. Este dano não é afetado por Fraqueza ou Resistência.",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte mal der Anzahl der an jenes Pokémon angelegten Energien zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Speed Wing",
				'fr-fr': "Ailes Vives",
				'es-es': "Ala Veloz",
				'it-it': "Alaveloce",
				'pt-br': "Asa da Velocidade",
				'de-de': "Turboschwinge"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It communicates using telepathy. Its body is covered in down that refracts light to make it invisible.",
	},

	thirdParty: {
		cardmarket: 388557,
		tcgplayer: 195151
	}
}

export default card
