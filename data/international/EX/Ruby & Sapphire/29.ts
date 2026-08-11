import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Delcatty",
		'fr-fr': "Delcatty",
		'de-de': "Enekoro"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [301],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Skitty",
		'fr-fr': "Skitty"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Call",
				'fr-fr': "Énergie supplémentaire",
				'de-de': "Energieruf"
			},
			effect: {
				'en-us': "Attach 1 Energy card from your discard pile to your Active Pokémon.",
				'fr-fr': "Attachez une carte Énergie de votre pile de défausse à votre Pokémon Actif.",
				'de-de': "Nimm eine Energiekarte von deinem Ablagestapel und lege sie an das Aktive Pokémon an."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cannonball",
				'fr-fr': "Boulet de canon",
				'de-de': "Kanonenkugel"
			},
			effect: {
				'en-us': "Does 30 damage plus 10 more damage for each Energy attached to Delcatty but not used to pay for this attack's Energy cost.",
				'fr-fr': "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie attachée à Delcatty qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Enekoro angelegte Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [		{
			type: "normal",
			thirdParty: {
				cardmarket: 275677,
				tcgplayer: 84735
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275677,
				tcgplayer: 84735
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125133
			}
		}
	],

}

export default card
