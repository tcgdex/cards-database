import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
		'de-de': "Wablu"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		333,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Fluff",
				'fr-fr': "Coton",
				'de-de': "Fluff"
			},
			effect: {
				'en-us': "Whenever Swablu would be damaged or affected by an opponent's attack and already has at least 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack, including damage, done to Swablu.",
				'fr-fr': "Dès qu'une attaque de votre adversaire inflige des dégâts ou affecte Tylton et si Tylton possède déjà un marqueur de dégât, lancez une pièce. Si c'est face, prévenez tous les effets infligés à Tylton, dégâts inclus, lors de cette attaque.",
				'de-de': "Whenever Swablu would be damaged or affected by an opponent's attack and already has at leats 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack, including damage, done to Swablu."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'de-de': "Peck"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89654,
				cardmarket: 276482
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89654,
				cardmarket: 276482
			},
		},
	],

}

export default card
