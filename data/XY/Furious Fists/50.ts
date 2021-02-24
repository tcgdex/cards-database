import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		286,
	],
	hp: 100,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Drain",
				fr: "Giga-Sangsue",
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Sky Uppercut",
				fr: "Stratopercut",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
