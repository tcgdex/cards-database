import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Ekans",
		'fr-fr': "Abo",
		'de-de': "Rettan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		23,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Shed Skin",
				'fr-fr': "Mue",
				'de-de': "Expidermis"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Ekans.",
				'fr-fr': "Retirez à Abo 2 marqueurs de dégât.",
				'de-de': "Entferne 2 Schadensmarken von Rettan."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Poison Fang",
				'fr-fr': "Croc-poison",
				'de-de': "Giftzahn"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné,",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It sneaks through grass without making a sound and strikes unsuspecting prey from behind.",
	},

	thirdParty: {
		cardmarket: 277968,
		tcgplayer: 85103
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
