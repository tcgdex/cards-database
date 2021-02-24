import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Primal Groudon-EX",
		fr: "Primo-Groudon-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		383,
	],
	hp: 240,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Groudon-EX",
		fr: "Groudon-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Gaia Volcano",
				fr: "Max Θ",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 100 more damage. Discard that Stadium card.",
			},
			damage: 100,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				fr: "Volcan de Gaïa",
			},
			effect: {
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 100 dégâts supplémentaires. Défaussez la carte Stade.",
			},
			damage: "100+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
