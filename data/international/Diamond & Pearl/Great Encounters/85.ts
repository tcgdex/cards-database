import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Solrock",
		'fr-fr': "Solaroc",
		'de-de': "Sonnfel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		338,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sunlight",
				'fr-fr': "Rayon solaire",
				'de-de': "Sonnenlicht"
			},
			effect: {
				'en-us': "If you have Lunatone in play, damage done to your opponent's Pokémon by your Psychic or Fighting Pokémon isn't affected by Resistance.",
				'fr-fr': "Si vous avez Seleroc en jeu, les dégâts infligés aux Pokémon de votre adversaire par vos Pokémon Psychic ou Fighting ne sont pas affectés par la Résistance.",
				'de-de': "Wenn du Lunastein im Spiel hast, wird Schaden, der gegnerischen Pokémon durch deine - oder -Pokémon zugefügt wird, durch Resistenz nicht verändert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Sol Charge",
				'fr-fr': "Recharge solaire",
				'de-de': "Solaraufladung"
			},
			effect: {
				'en-us': "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon.",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à 1 de vos Pokémon de Banc.",
				'de-de': "Durchsuche deinen Ablagestapel nach einer Basis-Energiekarte und lege sie an 1 Pokémon auf deiner Bank an."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A new Pokémon species, rumored to be from the sun. It gives off light while spinning.",
	},

	thirdParty: {
		cardmarket: 277987,
		tcgplayer: 89428
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
