import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon",
		'de-de': "Endivie"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		152,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Sleep Scent",
				'fr-fr': "Parfum dodo",
				'de-de': "Einschläfernder Duft"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" schläft das Verteidigende Pokémon jetzt."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Jump On",
				'fr-fr': "Sauter",
				'de-de': "Draufspringen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It uses the leaf on its head to determine the temperature and humidity. It loves to sunbathe.",
		'fr-fr': "Il jauge la température et l'humidité grâce à la feuille sur sa tête. Il raffole des bains de soleil."
	},

	thirdParty: {
		cardmarket: 277706,
		tcgplayer: 84278
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
