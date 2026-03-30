import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Mysdibule",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				fr: "Double Portion",
			},
			damage: "60×",
			effect: {
				fr: "Défaussez jusqu'à 2 cartes Énergie de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			},
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "OKACHEKE",

	thirdParty: {
		cardmarket: 877446
	}
}

export default card
