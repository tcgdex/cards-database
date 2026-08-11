import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'de-de': "Duflor"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Oddish",
		'fr-fr': "Myrapla",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Space Out",
				'fr-fr': "Sonné",
				'de-de': "Abdriften"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Gloom. Gloom is now Asleep.",
				'fr-fr': "Retirez à Ortide 2 marqueurs de dégât. Ortide est maintenant Endormi.",
				'de-de': "Entferne 2 Schadensmarken von Duflor. Duflor schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Stinky Nectar",
				'fr-fr': "Nectar puant",
				'de-de': "Stinkender Nektar"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et Empoisonné.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt und vergiftet."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The honey it drools from its mouth smells so atrocious, it can curl noses more than a mile away.",
		'fr-fr': "L'odeur du nectar de sa bouche est si répugnante qu'elle agresse les narines à deux kilomètres."
	},

	thirdParty: {
		cardmarket: 278245,
		tcgplayer: 85785
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
