import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Flygon",
		'fr-fr': "Libegon",
		'de-de': "Libelldra"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [330],

	hp: 120,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
			],
			name: {
				'en-us': "Energy Shower",
				'fr-fr': "Averse d'énergie",
				'de-de': "Energy Shower"
			},
			effect: {
				'en-us': "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like.",
				'fr-fr': "Choisissez dans votre main autant de cartes Énergie de base que vous le voulez et attachez-les à vos Pokémon de la façon que vous voulez.",
				'de-de': "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rainbow Burn",
				'fr-fr': "Brûlure arcenciel",
				'de-de': "Rainbow Burn"
			},
			effect: {
				'en-us': "Does 30 damage plus 10 more damage for each type of basic Energy card attached to Flygon.",
				'fr-fr': "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque type de carte Énergie de base attaché à Libegon.",
				'de-de': "Does 30 damage plus 10 more damage for each type of basic Energy attached to Flygon."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85521,
				cardmarket: 275881
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85521,
				cardmarket: 275881
			},
		},
	],

}

export default card
