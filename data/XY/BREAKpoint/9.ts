import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Durant",
		fr: "Fermite",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		632,
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
				en: "Mountain Munch",
				fr: "Dévore-Montagne",
			},
			effect: {
				en: "Discard the top card of your opponent’s deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Scrape Down",
				fr: "Racleur",
			},
			effect: {
				en: "If this Pokémon has any damage counters on it, discard the top 4 cards of your opponent’s deck.",
				fr: "Si ce Pokémon a des marqueurs de dégâts, défaussez les 4 cartes du dessus du deck de votre adversaire.",
			},

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
