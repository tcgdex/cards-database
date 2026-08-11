import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'de-de': "Maschock"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [67],

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Machop",
		'fr-fr': "Machoc"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Knuckle Down",
				'fr-fr': "Poing de chute",
				'de-de': "Knöchelhauer"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par les Poké-Powers, les Poké-Bodies ou tout autre effet en action sur le Pokémon Défenseur.",
				'de-de': "Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Strength",
				'fr-fr': "Force",
				'de-de': "Stärke"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It always goes at its full power, but this very tough and durable Pokémon never gets tired."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86984,
				cardmarket: 279570
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279570,
				tcgplayer: 86984
			}
		},
	],

}

export default card
