import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Chimecho",
		fr: "Eoko"
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		358,
	],
	hp: 60,
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
				en: "Chime",
				fr: "Carillon"
			},
			effect: {
				en: "Search your opponent's discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your opponent's discard pile.)",
				fr: "Choisissez une carte Supporter dans la pile de défausse de votre adversaire et appliquez l'effet de cette carte au lieu de l'effet de cette attaque. (La carte Supporter reste dans la pile de défausse de votre adversaire.)"
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Boom",
				fr: "Psycho-boom"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to the Defending Pokémon.",
				fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées au Pokémon Défenseur."
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
