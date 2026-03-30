import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Ronflex",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 160,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Vorace",
			},
			effect: {
				fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cherchez dans votre deck une quantité d'Énergies de base inférieure ou égale au nombre de côtés face obtenus, puis attachez celles-ci à ce Pokémon. Mélangez ensuite votre deck.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Effondrement",
			},
			damage: "160",
			effect: {
				fr: "Ce Pokémon est maintenant Endormi.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "J",
	illustrator: "Toshinao Aoki",

	thirdParty: {
		cardmarket: 877479
	}
}

export default card
