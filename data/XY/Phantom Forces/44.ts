import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
		es: "Pumpkaboo",
		it: "Pumpkaboo",
		pt: "Pumpkaboo",
		de: "Irrbis"
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
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
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
				en: "Night March",
				fr: "Marche Nocturne",
				es: "Marcha Nocturna",
				it: "Marcia Notturna",
				pt: "Marcha Noturna",
				de: "Nachtwanderung"
			},
			effect: {
				en: "This attack does 20 damage times the number of Pokémon in your discard pile that have the Night March attack.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon dans votre pile de défausse possédant l'attaque Marche Nocturne.",
				es: "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Marcha Nocturna.",
				it: "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che conosce l'attacco Marcia Notturna.",
				pt: "Esse ataque causa 20 de danos vezes o número de Pokémon em sua pilha de descarte que possuem o ataque Marcha Noturna.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Pokémon in deinem Ablagestapel, die Nachtwanderung beherrschen, zu."
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

	thirdParty: {
		cardmarket: 281850
	}
}

export default card
