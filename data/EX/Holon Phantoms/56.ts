import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké"
	},
	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		202,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Friends",
				fr: "À la rescousse!"
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 Pokémon de base et placez-les sur votre Banc. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Retaliate",
				fr: "Représailles"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Wobbuffet.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Qulbutoké."
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
