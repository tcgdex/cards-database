import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Bibarel",
		fr: "Castorno",
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		400,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Yawn",
				fr: "Bâillement",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Headbutt",
				fr: "Coup d'Boule Sans Fin",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 80 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
