import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'es-es': "Slowpoke",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke",
		'de-de': "Flegmon"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Big Yawn",
				'fr-fr': "Gros Bâillement"
			},
			effect: {
				'en-us': "Both this Pokémon and the Defending Pokémon are now Asleep.",
				'fr-fr': "Ce Pokémon et le Pokémon Défenseur sont maintenant Endormis."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Shot in the Dark",
				'fr-fr': "Au Pif"
			},
			effect: {
				'en-us': "Flip 2 coins. If either of them is tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Although slow, it is skilled at fishing with its tail. It does not feel pain if its tail is bitten.",
	},

	thirdParty: {
		cardmarket: 280351,
		tcgplayer: 89335
	}
}

export default card
