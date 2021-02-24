import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Groudon",
		fr: "Groudon",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		383,
	],
	hp: 130,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wreck",
				fr: "Anéantissement",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 50 more damage. Then, discard that Stadium card.",
				fr: "S’il y a une carte Stade en jeu, cette attaque inflige 50 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ground Slash",
				fr: "Tranch’Sol",
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
			},
			damage: 130,

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
