import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Shaymin (Sky Forme)",
		fr: "Shaymin",
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		492,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Flippity Flap",
				fr: "Flip Flap",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 6 cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Rally Back",
				fr: "Répercussions",
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during their last turn, this attack does 90 more damage.",
				fr: "Si l’un de vos Pokémon a été mis K.O. par les dégâts d'une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
