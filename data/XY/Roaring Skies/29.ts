import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		178,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Natu",
		fr: "Natu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Future Sight",
				fr: "Prescience",
			},
			effect: {
				en: "Look at the top 5 cards of either player’s deck and put them back on top of that player’s deck in any order.",
				fr: "Regardez les 5 cartes du dessus du deck de l'un des joueurs et replacez-les sur le dessus du deck de ce joueur dans l'ordre de votre choix.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Stressful Eye",
				fr: "Regard Angoissant",
			},
			effect: {
				en: "Your opponent reveals his or her hand. Discard a Trainer card you find there.",
				fr: "Votre adversaire montre sa main. Défaussez une carte Dresseur que vous y trouvez.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
