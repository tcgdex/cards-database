import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Dragmara",
	},
	set: Set,
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 170,
	stage: "Stage2",
	evolveFrom: {
		fr: "Amagara",
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Mur Toundra",
			},
			effect: {
				fr: "Vos Pokémon auxquels au moins une Énergie Eau est attachée subissent 50 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance). L'effet de Mur Toundra n'est pas cumulable.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				fr: "Frisson Glaçant",
			},
			damage: "150",
			effect: {
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas utiliser d'attaques.",
			},
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "Masa",

	thirdParty: {
		cardmarket: 877509
	}
}

export default card
