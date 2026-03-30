import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Efflèche",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	stage: "Stage1",
	evolveFrom: {
		fr: "Brindibou",
	},
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Feuillage",
			},
			damage: "20",
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Tir Plumeux",
			},
			effect: {
				fr: "Défaussez toutes les Énergies de ce Pokémon. Cette attaque inflige 90 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "aspara",

	thirdParty: {
		cardmarket: 877423
	}
}

export default card
