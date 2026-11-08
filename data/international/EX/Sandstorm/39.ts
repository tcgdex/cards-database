import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Kabuto",
		'fr-fr': "Kabuto",
		'de-de': "Kabuto"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [140],

	hp: 60,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Mysterious Fossil",
		'fr-fr': "Mystérieux fossile"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Exoskeleton",
				'fr-fr': "Exosquelette",
				'de-de': "Exoskelett"
			},
			effect: {
				'en-us': "Any damage done to Kabuto by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Tous dégâts infligés à Kabuto par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Jeder Schaden, der Kabuto durch Angriffe zugefügt wird, wird um 20 reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Team Assembly",
				'fr-fr': "Rassemblement d'équipe",
				'de-de': "Teamversammlung"
			},
			effect: {
				'en-us': "Search your deck for Omanyte, Kabuto, or any Basic Pokémon and put as many of them as you like onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokémon as Basic Pokémon.",
				'fr-fr': "Cherchez dans votre deck Amonita, Kabuto ou d'autres Pokémon de base et placez-en autant que vous le voulez sur votre Banc. Ensuite, mélangez votre deck. Traitez les nouveaux Pokémon du Banc comme des Pokémon de base.",
				'de-de': "Durchsuche dein Deck nach Amonitas, Kabuto oder beliebigen Basis-Pokémon und lege so viele wie du möchtest von ihnen auf deine Bank. Mische dein Deck danach. Behandle die neuen Pokémon wie Basis-Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Pierce",
				'fr-fr': "Transpercer",
				'de-de': "Durchbohren"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275816,
				tcgplayer: 86380
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275816,
				tcgplayer: 86380
			}
		},
	],

}

export default card
