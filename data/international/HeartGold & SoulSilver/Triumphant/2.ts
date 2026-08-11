import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
		'de-de': "Altaria"
	},

	illustrator: "Ryo Ueda",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [334],

	hp: 90,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Midnight Eyes",
				'fr-fr': "Yeux de minuit",
				'de-de': "Mitternachtsaugen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stadium Power",
				'fr-fr': "Stade puissant",
				'de-de': "Stadionpower"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 40 damage plus 30 more damage.",
				'fr-fr': "Si une carte Stade est en jeu, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn sich eine Stadion-Karte im Spiel befindet, fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It flies gracefully through the sky. Its melodic humming makes you feel like you’re in a dream."
	},

	variants: [		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83518,
				cardmarket: 279532
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279532,
				tcgplayer: 83518
			}
		},
	],

}

export default card
