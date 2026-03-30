import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Brutalibré",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				fr: "Coup de Pied Vengeur",
			},
			damage: "30+",
			effect: {
				fr: "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 60 dégâts supplémentaires.",
			},
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	regulationMark: "J",
	illustrator: "osare",

	thirdParty: {
		cardmarket: 877460
	}
}

export default card
