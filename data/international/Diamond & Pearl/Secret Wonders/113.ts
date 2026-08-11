import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Stantler",
		'fr-fr': "Cerfrousse",
		'de-de': "Damhirplex"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		234,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Lead",
				'fr-fr': "Avance",
				'de-de': "Führen"
			},
			effect: {
				'en-us': "Search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Supporter, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frighten Horn",
				'fr-fr': "Corne qui fait peur",
				'de-de': "Angsthorn"
			},
			effect: {
				'en-us': "If the Defending Pokémon isn't an Evolved Pokémon, that Pokémon is now Confused.",
				'fr-fr': "Si le Pokémon Défenseur n'est pas un Pokémon Évolué, il est maintenant Confus.",
				'de-de': "Wenn das Verteidigende Pokémon kein entwickeltes Pokémon ist, ist es jetzt verwirrt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Staring at its antlers creates an odd sensation as if one were being drawn into their centers.",
	},

	thirdParty: {
		cardmarket: 277866,
		tcgplayer: 89504
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
