import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 100,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energize",
				fr: "Énergisant",
			},
			effect: {
				en: "Attach a Lightning Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie Lightning de votre pile de défausse à ce Pokémon.",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Spark Bolt",
				fr: "Éclair Étincelant",
			},
			effect: {
				en: "You may discard all Energy attached to this Pokémon. If you do, this attack does 70 more damage.",
				fr: "Vous pouvez défausser toutes les Énergies attachées à ce Pokémon. Dans ce cas, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
