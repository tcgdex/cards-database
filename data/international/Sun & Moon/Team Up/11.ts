import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'pt-br': "Charmander",
		'de-de': "Glumanda"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reprisal",
				'fr-fr': "Revanche",
				'es-es': "Tomar Represalias",
				'it-it': "Rappresaglia",
				'pt-br': "Retaliar",
				'de-de': "Repressalie"
			},
			effect: {
				'en-us': "This attack does 20 damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The flame on its tail indicates Charmander's life force. If it is healthy, the flame burns brightly.",
	},

	thirdParty: {
		cardmarket: 368944,
		tcgplayer: 183782
	}
}

export default card
