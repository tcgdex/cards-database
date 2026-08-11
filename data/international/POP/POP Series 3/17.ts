import { Card } from 'models/database/card'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		'en-us': "Ho-Oh ex",
		'fr-fr': "Ho-Oh ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [250],

	hp: 110,

	types: [
		"Fire"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Golden Wing",
				'fr-fr': "Aile dorée"
			},
			effect: {
				'en-us': "If Ho-Oh ex would be Knocked Out by damage from an opponent's attack, you may move up to 2 Energy attached to Ho-Oh ex to your Pokémon in any way you like.",
				'fr-fr': "Si Ho-Oh ex doit être mis K.O par les dégâts d'une attaque de votre adversaire, vous pouvez déplacer jusqu'à 2 Énergies attachées à Ho-Oh ex sur vos Pokémon, de la façon que vous voulez."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rainbow Burn",
				'fr-fr': "Brûlure arcenciel"
			},
			effect: {
				'en-us': "Does 10 damage plus 20 more damage for each type of basic Energy card attached to Ho-Oh ex.",
				'fr-fr': "Inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque type de carte Énergie de base attaché à Ho-Oh ex."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	suffix: "EX",
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86129,
				cardmarket: 277465
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 97809,
				cardmarket: 277465
			},
		},
	],

}

export default card
