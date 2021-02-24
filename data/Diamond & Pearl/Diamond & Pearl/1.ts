import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Dialga",
		fr: "Dialga",
	},
	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		483,
	],
	hp: 90,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Time Bellow",
				fr: "Appel temporel",
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Flash Cannon",
				fr: "Luminocanon",
			},
			effect: {
				en: "You may return all Energy cards attached to Dialga to your hand. If you do, remove the highest Stage Evolution card from the Defending Pokémon and shuffle that card into your opponent's deck.",
				fr: "Vous pouvez reprendre dans votre main toutes les cartes Énergie attachées à Dialga. Retirez alors au Pokémon Défenseur la carte Évolution au niveau le plus élevé et mélangez-la au deck de votre adversaire.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
