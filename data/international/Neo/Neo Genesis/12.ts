import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Pichu",
		'fr-fr': "Pichu",
		'de-de': "Pichu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		172,
	],

	hp: 30,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Zzzap",
				'fr-fr': "Zzzap",
				'de-de': "Zzzapp!"
			},
			effect: {
				'en-us': "Does 20 damage to each Pokémon in play that has a Pokémon Power. Don't apply Weakness and Resistance.",
				'fr-fr': "Inflige 20 dégâts à chaque Pokémon en jeu possédant un Pouvoir Pokémon. Ne pas appliquer la Faiblesse et la Résistance.",
				'de-de': "Fügt jedem Pokémon im Spiel, das eine Pokémon-Power hat, 20 Schadenspunkte zu. Wende Schwäche und Resistenz nicht an."
			},

		},
	],

	description: {
		'en-us': "Despite its small size, it can zap even adult humans. However, if it does so, it also surprises itself.",
		'fr-fr': "Bien qu'il soit très petit, il peut électrocuter un adulte. Cependant, s'il le fait, il se surprend lui-même."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274412,
				tcgplayer: 88011
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274412,
				tcgplayer: 88011
			}
		}
	]
}

export default card
