import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross",
	},

	illustrator: "HiRON",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Synchro Star",
				fr: "Étoile Synchro",
			},
			effect: {
				en: "If this Pokémon and your opponent’s Active Pokémon have the same amount of Energy attached to them, this attack does 60 more damage.",
				fr: "Si ce Pokémon et le Pokémon Actif de votre adversaire ont le même nombre d'Énergies leur étant attachées, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
