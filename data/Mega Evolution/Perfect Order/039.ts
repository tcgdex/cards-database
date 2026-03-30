import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Hippopotas",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				fr: "Jet de Sable",
			},
			damage: "10",
			effect: {
				fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'utiliser une attaque, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée.",
			},
		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Morsure",
			},
			damage: "60",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "J",
	illustrator: "Kagemaru Himeno",

	thirdParty: {
		cardmarket: 877453
	}
}

export default card
