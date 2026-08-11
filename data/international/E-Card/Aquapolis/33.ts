import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Slowbro",
		'fr-fr': "Flagadoss",
		'de-de': "Lahmus"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [80],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dense Body",
				'fr-fr': "Corps dense",
				'de-de': "Dense Body"
			},
			effect: {
				'en-us': "Any damage done to Slowbro by attacks from Basic Pokémon (excluding Baby Pokémon) is reduced by 20.",
				'fr-fr': "Tous les dégâts infligés à Flagadoss par des attaques de Pokémon de base (sans compter les Bébés Pokémon) sont réduits de 20.",
				'de-de': "Any damage done to Slowbro by attacks from Basic Pokémon (excluding Baby Pokémon) is reduced by 20."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Energy Cannon",
				'fr-fr': "Canon à énergie",
				'de-de': "Energy Cannon"
			},
			effect: {
				'en-us': "This attack does 30 damage plus 10 damage for each Energy attached to Slowbro but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				'fr-fr': "Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Flagadoss mais non utilisée pour payer le coût d'Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				'de-de': "This attack does 30 damage plus 10 more damage for each Energy attached to Slowbro but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89302,
				cardmarket: 275105
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89302,
				cardmarket: 275105
			}
		},
	]
}

export default card
