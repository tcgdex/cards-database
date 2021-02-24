import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Zygarde-EX",
		fr: "Zygarde-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		718,
	],
	hp: 190,
	types: [
		"Fightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Land's Pulse",
				fr: "Vibration Terrestre",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 20 more damage.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Cell Storm",
				fr: "Tempête Cellulaire",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Land's Wrath",
				fr: "Force Chtonienne",
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
