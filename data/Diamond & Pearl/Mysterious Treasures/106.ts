import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Totodile",
		fr: "Kaiminus"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		158,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Bite",
				fr: "Morsure"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Shining Fang",
				fr: "Croc brillant"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 10 damage plus 10 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	description: {
		fr: "Il broie tout ce qu'il trouve avec ses mâchoires puissantes. Même son dresseur doit s'en méfier."
	}
}

export default card
