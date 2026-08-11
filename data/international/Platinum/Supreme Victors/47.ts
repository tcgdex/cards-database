import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Wailord",
		'fr-fr': "Wailord",
		'de-de': "Wailord"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [321],

	hp: 180,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rest",
				'fr-fr': "Repos",
				'de-de': "Ruhe"
			},
			effect: {
				'en-us': "Remove all Special Conditions and 4 damage counters from Wailord. Wailord is now Asleep.",
				'fr-fr': "Retirez à Wailord tous ses États Spéciaux ainsi que 4 marqueurs de dégât. Wailord est maintenant Endormi.",
				'de-de': "Entferne alle Speziellen Zustände und 4 Schadensmarken von Wailord. Wailord schläft jetzt."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giant Wave",
				'fr-fr': "Vague géante",
				'de-de': "Riesenwelle"
			},
			effect: {
				'en-us': "Wailord can't use Giant Wave during your next turn.",
				'fr-fr': "Wailord ne peut pas utiliser Vague géante lors de votre prochain tour.",
				'de-de': "Wailord kann Riesenwelle in deinem nächsten Zug nicht einsetzen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 4,

	description: {
		'en-us': "The biggest of all Pokémon. It can dive to a depth of almost 10,000 feet on only one breath."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90460,
				cardmarket: 278738
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278738,
				tcgplayer: 90460
			}
		},
	],

}

export default card
