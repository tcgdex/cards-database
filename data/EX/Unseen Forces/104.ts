import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Ho-Oh ex",
		fr: "Ho-Oh ex",
		de: "Ho-oh ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		250,
	],

	hp: 110,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Golden Wing",
				fr: "Aile dorée",
				de: "Golden Wing"
			},
			effect: {
				en: "If Ho-Oh ex would be Knocked Out by damage from an opponent's attack, you may move up to 2 Energy attached to Ho-Oh ex to your Pokémon in any way you like.",
				fr: "Si Ho-Oh ex doit être mis K.O par les dégâts d'une attaque de votre adversaire, vous pouvez déplacer jusqu'à 2 Énergies attachées à Ho-Oh ex sur vos Pokémon, de la façon que vous voulez.",
				de: "If Ho-oh ex would be Knocked Out by damage from an opponent's attack, you may move up to 2 Energy attached to Ho-oh ex to your Pokémon in any way you like."
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
				en: "Rainbow Burn",
				fr: "Brûlure arcenciel",
				de: "Rainbow Burn"
			},
			effect: {
				en: "Does 10 damage plus 20 more damage for each type of basic Energy card attached to Ho-Oh ex.",
				fr: "Inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque type de carte Énergie de base attaché à Ho-Oh ex.",
				de: "Does 10 damage plus 20 more damage for each type of basic Energy card attached to Ho-oh ex."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 86128
	},

	variants: [
		{
			type: "holo",
		},
	]
}

export default card
