import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Sudowoodo",
		'fr-fr': "Simularbre",
		'de-de': "Mogelbaum"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [185],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Copy",
				'fr-fr': "Copiage",
				'de-de': "Copy"
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Sudowoodo doesn't have the Energy necessary to use that attack. (You must still do anything else required in order to use that attack.)",
				'fr-fr': "Choisissez une des attaques du Pokémon Défenseur. Copiage copie cette attaque. Cette attaque ne fait rien si Simularbre n'a pas l'Énergie nécessaire pour utiliser cette attaque. (Vous devez toujours accomplir les autres actions afin d'utiliser cette attaque.)",
				'de-de': "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Sudowoodo doesn't have the Energy necessary to use that attack. (You must still do anything else required in order to use that attack.)"
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Energy Draw",
				'fr-fr': "Absorption d'énergie",
				'de-de': "Energy Draw"
			},
			effect: {
				'en-us': "Search your deck for a basic Energy card and attach it to Sudowoodo. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie de base et attachez-la à Simularbre. Mélangez ensuite votre deck.",
				'de-de': "Search your deck for a basic Energy card and attach it to Sudowoodo. Shuffle your deck afterward."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89589,
				cardmarket: 275108
			}
		},
	]
}

export default card
