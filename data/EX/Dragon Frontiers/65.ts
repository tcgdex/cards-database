import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Swablu δ",
		fr: "Tylton δ ESPÈCES DELTA"
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		333,
	],
	hp: 40,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Splash About",
				fr: "Grosse trempette"
			},
			effect: {
				en: "If Swablu has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage.",
				fr: "Si Tylton possède moins d'Énergies que le Pokémon Défenseur, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
