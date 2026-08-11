import { Card } from 'models/database/card'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		'en-us': "Pachirisu",
		'fr-fr': "Pachirisu"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [417],

	hp: 70,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thunder Wave",
				'fr-fr': "Cage-éclair"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Poison Berry",
				'fr-fr': "Gorgée de poison"
			},
			effect: {
				'en-us': "If you have Croagunk in play, this attack does 20 damage plus 20 more damage and the Defending Pokémon is now Poisoned.",
				'fr-fr': "Si vous avez un Cradopaud en jeu, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Empoisonné."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It makes electricity with pouches in its cheeks and shoots charges from its tail. It live atop trees.",
		'fr-fr': "Les poches de ses joues produisent de l'électricité et sa queue envoie des éclairs. Il vit dans les arbres."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87902,
				cardmarket: 278561
			},
		},
	],

}

export default card
