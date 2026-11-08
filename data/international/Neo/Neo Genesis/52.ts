import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Xatu",
		'fr-fr': "Xatu",
		'de-de': "Xatu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		178,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Natu",
		'fr-fr': "Natu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Prophecy",
				'fr-fr': "Prophétie",
				'de-de': "Prophecy"
			},
			effect: {
				'en-us': "Look at the top 3 cards of either player's deck and rearrange them as you like.",
				'fr-fr': "Regardez les 3 cartes du dessus du deck de n'importe quel joueur et ordonnez-les comme bon vous semble.",
				'de-de': "Look at the top 3 cards of either player's deck and rearrange them as you like."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Confuse Ray"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "They say that it stays still and quiet because it is seeing both the past and future at the same time.",
		'fr-fr': "On dit qu'il reste silencieux et immobile car il observe le passé et le futur en même temps."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274452,
				tcgplayer: 90661
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274452,
				tcgplayer: 90661
			}
		}
	]
}

export default card
