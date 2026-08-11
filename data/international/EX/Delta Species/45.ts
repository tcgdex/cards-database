import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Illumise",
		'fr-fr': "Lumivole",
		'de-de': "Illumise"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		314,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Beacon Protection",
				'fr-fr': "Lumière protectrice",
				'de-de': "Beacon Protection"
			},
			effect: {
				'en-us': "As long as you have Volbeat in play, prevent all effects, including damage, done to Illumise by attacks from your opponent's Pokémon that has Dark in its name.",
				'fr-fr': "Tant que votre Muciole est en jeu, prévenez tous les effets, dégâts inclus, infligés à Lumivole par des attaques de Pokémon de votre adversaire dont le nom comporte Obscur.",
				'de-de': "As long as you have Volbeat in play, prevent all effects, including damage, done to Illumise by attacks from your opponent's Pokémon that has Dark in its name."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Call for Family"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
				"Grass",
			],
			name: {
				'en-us': "Strange Rasping",
				'fr-fr': "Grincement étrange",
				'de-de': "Strange Rasping"
			},
			effect: {
				'en-us': "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolué, il est maintenant Confus.",
				'de-de': "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276808,
		tcgplayer: 86266
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

