import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Majaspic",
	},
	set: Set,
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	stage: "Stage2",
	evolveFrom: {
		fr: "Lianaja",
	},
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Ordre Majestueux",
			},
			damage: "20×",
			effect: {
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu.",
			},
		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				fr: "Enroulement Solaire",
			},
			damage: "100+",
			effect: {
				fr: "Si Encouragement d'Écho est dans votre pile de défausse, cette attaque inflige 150 dégâts supplémentaires.",
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
	illustrator: "kodama",

	thirdParty: {
		cardmarket: 877418
	}
}

export default card
