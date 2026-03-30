import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Spectrum",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	stage: "Stage1",
	evolveFrom: {
		fr: "Fantominus",
	},
	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				fr: "Hanter",
			},
			effect: {
				fr: "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Kedamahadaitai Yawarakai",

	thirdParty: {
		cardmarket: 877464
	}
}

export default card
