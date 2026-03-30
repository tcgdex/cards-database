import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Excavarenne",
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	stage: "Stage1",
	evolveFrom: {
		fr: "Sapereau",
	},
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Séisme",
			},
			damage: "140",
			effect: {
				fr: "Cette attaque inflige aussi 30 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Assommer",
			},
			damage: "100",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "J",
	illustrator: "Mousho",

	thirdParty: {
		cardmarket: 877481
	}
}

export default card
