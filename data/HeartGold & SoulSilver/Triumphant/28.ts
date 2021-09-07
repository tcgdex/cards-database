import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		31,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidorina",
		fr: "Nidorina",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Return",
				fr: "Retour",
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Piochez jusqu'à ce que vous ayez 6 cartes en main.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Prize Count",
				fr: "Compteur de Récompense",
			},
			effect: {
				en: "If you have more Prize cards left than your opponent, this attack does 50 damage plus 30 more damage.",
				fr: "S'il vous reste plus de cartes Récompense que votre adversaire, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
