import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Mightyena",
		'fr-fr': "Grahyena",
		'de-de': "Magnayen"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		262,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Poochyena",
		'fr-fr': "Fiffyen",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Bite On",
				'fr-fr': "Morsure à répétition",
				'de-de': "Anbeißen"
			},
			effect: {
				'en-us': "If the Defending Pokémon isn't an Evolved Pokémon, that Pokémon can't attack, retreat, or use any Poké-Powers during your opponent's next turn.",
				'fr-fr': "Si le Pokémon Défenseur n'est pas un Pokémon Évolué, il ne peut pas attaquer, battre en retraite ou utiliser de Poké-Powers lors du prochain tour de votre adversaire.",
				'de-de': "Wenn das Verteidigende Pokémon kein entwickeltes Pokémon ist, kann es im nächsten Zug deines Gegners nicht angreifen, sich zurückziehen oder Poké-Power benutzen."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Harass",
				'fr-fr': "Harcèlement",
				'de-de': "Schikanieren"
			},
			effect: {
				'en-us': "Does 10 damage times the number of Pokémon you have in play.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de Pokémon que vous avez en jeu.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl deiner Pokémon im Spiel zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It chases down prey in a pack. It will never disobey the commands of a skilled Trainer.",
		'fr-fr': "Il traque ses proies en groupe. Il ne désobéira jamais aux ordres d'un bon Dresseur."
	},

	thirdParty: {
		cardmarket: 278215,
		tcgplayer: 87447
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
