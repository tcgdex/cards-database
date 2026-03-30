import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Ptyranidur",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	stage: "Stage1",
	evolveFrom: {
		fr: "Fossile Mâchoire Ancien",
	},
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				fr: "Coléreux",
			},
			damage: "20×",
			effect: {
				fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
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
	illustrator: "Tomoki Sone",

	thirdParty: {
		cardmarket: 877458
	}
}

export default card
