import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Mantine",
		fr: "Démanta",
	},
	illustrator: "DemizuPosuka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		226,
	],
	hp: 100,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Healing Wave",
				fr: "Vague de Soin",
			},
			effect: {
				en: "Discard as many cards as you like from your hand. Heal 10 damage from this Pokémon for each card you discarded in this way.",
				fr: "Défaussez autant de cartes que vous voulez de votre main. Soignez 10 dégâts à ce Pokémon pour chaque carte défaussée de cette façon.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Dwindling Wave",
				fr: "Vague Faiblissante",
			},
			effect: {
				en: "This attack does 90 damage minus 10 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 90 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: "90−",

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
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
