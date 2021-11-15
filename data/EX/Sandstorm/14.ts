import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Zangoose",
		fr: "Mangriff"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		335,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Poison Resistance",
				fr: "Résistance au poison"
			},
			effect: {
				en: "Zangoose can't be Poisoned.",
				fr: "Mangriff ne peut pas être Empoisonné."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Target Slash",
				fr: "Tranche-cible"
			},
			effect: {
				en: "If the Defending Pokémon is Seviper, this attack does 10 damage plus 30 more damage.",
				fr: "Si Seviper est le Pokémon Défenseur, cette attaque inflige 40 dégâts."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Slash",
				fr: "Super entaille"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 30 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 60 dégâts."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
