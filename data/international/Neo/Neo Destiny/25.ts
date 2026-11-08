import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Light Machamp",
		'fr-fr': "Mackogneur lumineux",
		'de-de': "Helles Machomei"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur lumineux"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],

			name: {
				'en-us': "Beatdown",
				'fr-fr': "Combat",
				'de-de': "Beatdown"
			},

			effect: {
				'en-us': "If the Defending Pokémon has Dark in its name or is a Pokémon, flip a coin. If heads, this attack does 100 damage instead of 50.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon obscur ou si c'est un Pokémon , lancez une pièce. Si c'est face, cette attaque inflige 100 dégâts au lieu de 50.",
				'de-de': "If the Defending Pokémon has Dark in its name or is a  Pokémon, flip a coin. If heads, this attack does 100 damage instead of 50."
			},

			damage: 50
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It uses its four arms in combat to unleash a ceaseless flurry of punches.",
		'fr-fr': "Il utilise ses quatre bras au combat pour délivrer une véritable ruée de coups."
	},

	abilities: [{
		name: {
			'fr-fr': "Tandem",
			'de-de': "Tag Team",
			'en-us': "Tag Team",
		},

		effect: {
			'fr-fr': "Quand vous jouez Mackogneur depuis votre main, si vous le placez sur votre Banc, retirez 3 marqueurs de dégâts de votre Pokémon Actif. S'il a moins de 3 marqueurs de dégâts, retirez-les tous. Échangez ensuite Mackogneur lumineux contre votre Pokémon Actif.",
			'en-us': "When you play Light Machamp from your hand, if is on your Bench, remove 3 damage counters than that, remove all of them. Then, switch Light Machamp with your Active Pokémon.",
			'de-de': "When you play Light Machamp from your hand, if is on your Bench, remove 3 damage counters than that, remove all of them. Then, switch Light Machamp with your Active Pokémon."
		},

		type: "Pokemon Power"
	}],


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274677,
				tcgplayer: 86744
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274677,
				tcgplayer: 86744
			}
		}
	]
}

export default card
