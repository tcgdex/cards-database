import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Lokhlass-ex",
	},
	set: Set,
	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				fr: "Hydro-Tour",
			},
			damage: "30×",
			effect: {
				fr: "Cette attaque inflige 30 dégâts pour chaque Énergie Eau attachée à ce Pokémon. Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			},
		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				fr: "Surf",
			},
			damage: "140",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 877434
	}
}

export default card
