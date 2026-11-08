import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Skarmory",
		'fr-fr': "Airmure",
		'es-es': "Skarmory",
		'it-it': "Skarmory",
		'pt-br': "Skarmory",
		'de-de': "Panzaeron"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		227,
	],

	hp: 100,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Metal Sound",
				'fr-fr': "Strido-Son",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Défenseur.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its heavy-looking iron body is actually thin and light, so it can fly at speeds over 180 mph.",
	},

	thirdParty: {
		cardmarket: 280682,
		tcgplayer: 89245
	}
}

export default card
