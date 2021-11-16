import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Unown [H]",
		fr: "Zarbi H"
	},

	illustrator: "CR CG gangs",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "[Help]",
				fr: "Help"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Unown H, Unown E, Unown L, and Unown P on your Bench, you may shuffle your hand into your deck, then draw a new hand of the same number of cards.",
				fr: "Une fois pendant votre tour (avant votre attaque), si vous avez Zarbi [H], Zarbi [E], Zarbi [L] et Zarbi [P] sur votre Banc, vous pouvez mélanger votre main à votre deck et piocher une nouvelle main ayant le même nombre de cartes que la précédente."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "On pense que la variété des types de ce Pokémon particulier est le résultat d'une adaptation due à un caprice de l'évolution, chacun possédant une capacité différente."
	}
}

export default card
