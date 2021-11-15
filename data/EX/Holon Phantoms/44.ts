import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Holon's Castform",
		fr: "Morpheo d'Holon"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		351,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Delta Draw",
				fr: "Pioche Delta"
			},
			effect: {
				en: "Count the number of Pokémon you have in play that has δ on its card. Draw up to that many cards.",
				fr: "Comptabilisez le nombre de Pokémon possédant le symbole δ que vous avez en jeu. Piochez autant de cartes."
			},

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
