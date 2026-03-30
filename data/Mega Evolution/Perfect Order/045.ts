import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Rexillius",
	},
	set: Set,
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	stage: "Stage2",
	evolveFrom: {
		fr: "Ptyranidur",
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Tyrannie Musclée",
			},
			effect: {
				fr: "Si au moins une Énergie spéciale est attachée à ce Pokémon, il a +150 PV.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				fr: "Ravages",
			},
			damage: "160",
			effect: {
				fr: "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
			},
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "Dsuke",

	thirdParty: {
		cardmarket: 877459
	}
}

export default card
