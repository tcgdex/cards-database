import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Pumpkaboo",
		'fr-fr': "Pitrouille",
		'es-es': "Pumpkaboo",
		'it-it': "Pumpkaboo",
		'pt-br': "Pumpkaboo",
		'de-de': "Irrbis"
	},

	illustrator: "HiRON",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		710,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Night March",
				'fr-fr': "Marche Nocturne",
				'es-es': "Marcha Nocturna",
				'it-it': "Marcia Notturna",
				'pt-br': "Marcha Noturna",
				'de-de': "Nachtwanderung"
			},
			effect: {
				'en-us': "This attack does 20 damage times the number of Pokémon in your discard pile that have the Night March attack.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon dans votre pile de défausse possédant l'attaque Marche Nocturne.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Marcha Nocturna.",
				'it-it': "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che conosce l'attacco Marcia Notturna.",
				'pt-br': "Esse ataque causa 20 de danos vezes o número de Pokémon em sua pilha de descarte que possuem o ataque Marcha Noturna.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Pokémon in deinem Ablagestapel, die Nachtwanderung beherrschen, zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The pumpkin body is inhabited by a spirit trapped in this world. As the sun sets, it becomes restless and active.",
	},

	thirdParty: {
		cardmarket: 281850,
		tcgplayer: 94502
	}
}

export default card
