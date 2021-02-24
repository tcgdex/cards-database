import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		110,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Surrender Now",
			},
			effect: {
				en: "Once during your turn, if this Pokémon is discarded with the effect of Jessie & James, you may have your opponent discard a card from their hand. (They discard that card after the effect of Jessie & James.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Rendez-Vous Tous",
			},
			effect: {
				fr: "Une seule fois pendant votre tour, si ce Pokémon est défaussé du fait de l’effet de la carte Jessie et James, vous pouvez demander à votre adversaire de défausser une carte de sa main. (Cette carte est défaussée après l’effet de Jessie et James.)",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Charge",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
