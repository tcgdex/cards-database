import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
		'de-de': "Traumato"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [96],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sleep Inducer",
				'fr-fr': "Poussododo",
				'de-de': "Schlafeinflößer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it. The new Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez un des Pokémon du Banc de votre adversaire et échangez-le contre le Pokémon Défenseur. Le nouveau Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Wirf eine Münze. Wähle bei \"Kopf\" 1 der Pokémon auf der Bank deines Gegners und tausche es mit dem Verteidigenden Pokémon. Das neue Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 84971,
				cardmarket: 275147
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 84971,
				cardmarket: 275147
			}
		},
	]
}

export default card
