import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Girafarig",
		'fr-fr': "Girafarig",
		'de-de': "Girafarig"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		203,
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
				"Colorless",
			],
			name: {
				'en-us': "Agility",
				'fr-fr': "Hâte",
				'de-de': "Agility"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Girafarig.",
				'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Girafarig.",
				'de-de': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Girafarig."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale psy",
				'de-de': "Psybeam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 20,

		},
	],

	retreat: 1,

	description: {
		'en-us': "Its tail has a small brain of its own. Beware! If you get close, it may react to your scent and bite.",
		'fr-fr': "Sa queue possède son propre cerveau. Prenez garde ! Si vous vous approchez, elle peut réagir à votre odeur et vous mordre."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274458,
				tcgplayer: 85726
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274458,
				tcgplayer: 85726
			}
		}
	]
}

export default card
