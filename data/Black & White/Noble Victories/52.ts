import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Reuniclus",
		fr: "Symbios",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		579,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Duosion",
		fr: "Méios",
	},
	stage: "Stage2",


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
				en: "Look at the top 5 cards of your deck and put them back on top of your deck in any order.",
				fr: "Regardez les 5 cartes du dessus de votre deck et replacez-les sur le dessus de votre deck dans l'ordre de votre choix.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Net Force",
				fr: "Force Accrue",
			},
			effect: {
				en: "Does 40 damage times the number of Reuniclus you have in play.",
				fr: "Inflige 40 dégâts multipliés par le nombre de Symbios que vous avez en jeu.",
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

	retreat: 2,



}

export default card
