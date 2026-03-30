import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Volcanion",
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				fr: "Force",
			},
			damage: "50",
		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				fr: "Vapeur Puissante",
			},
			damage: "90×",
			effect: {
				fr: "Lancez une pièce pour chaque Énergie Eau attachée à ce Pokémon. Cette attaque inflige 90 dégâts pour chaque côté face.",
			},
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "AKIRA EGAWA",

	thirdParty: {
		cardmarket: 877438
	}
}

export default card
