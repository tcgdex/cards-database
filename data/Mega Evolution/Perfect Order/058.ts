import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Exagide",
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	stage: "Stage2",
	evolveFrom: {
		fr: "Dimoclès",
	},
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Tranche",
			},
			damage: "80",
		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Tranche Métallique",
			},
			damage: "230",
			effect: {
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "Mitsuhiro Arita",

	thirdParty: {
		cardmarket: 877474
	}
}

export default card
