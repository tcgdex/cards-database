import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Amagara",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	stage: "Stage1",
	evolveFrom: {
		fr: "Fossile Nageoire Ancien",
	},
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				fr: "Vent Glace",
			},
			damage: "50",
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "Hitoshi Ariga",

	thirdParty: {
		cardmarket: 877435
	}
}

export default card
