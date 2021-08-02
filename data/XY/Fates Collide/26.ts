import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "M Alakazam EX",
		fr: "M-Alakazam-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		65,
	],
	hp: 210,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Alakazam-EX",
		fr: "Alakazam-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Zen Force",
				fr: "Force Zen",
			},
			effect: {
				en: "This attack does 30 more damage for each damage counter on your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
