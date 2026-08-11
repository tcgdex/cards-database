import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Roserade",
		'fr-fr': "Roserade",
		'de-de': "Roserade"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		407,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Roselia",
		'fr-fr': "Roselia",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sleep Poison",
				'fr-fr': "Poison dodo",
				'de-de': "Schlafgift"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt und ist vergiftet."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magical Leaf",
				'fr-fr': "Feuillemagik",
				'de-de': "Zauberblatt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage plus 30 more damage and remove 3 damage counters from Roserade.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires. Retirez à Roserade 3 marqueurs de dégât.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu und entferne 3 Schadensmarken von Roserade."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It attracts prey with a sweet aroma, then downs it with thorny whips hidden in its arms.",
	},

	thirdParty: {
		cardmarket: 277770,
		tcgplayer: 88827
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
