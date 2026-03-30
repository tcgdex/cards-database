import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Méga-Zygarde-ex",
	},
	set: Set,
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Onde de Gaïa",
			},
			damage: "200",
			effect: {
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Zéro Annihilant",
			},
			effect: {
				fr: "Pour chacun des Pokémon de votre adversaire, lancez une pièce. Si c'est face, cette attaque inflige 150 dégâts à ce Pokémon-là. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "takuyoa",

	thirdParty: {
		cardmarket: 877521
	}
}

export default card
