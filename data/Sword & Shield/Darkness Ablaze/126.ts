import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Klang",
		fr: "Clic"
	},

	illustrator: "NC Empire",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Klink",
		fr: "Tic"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Call for Backup",
				fr: "Renforts"
			},
			effect: {
				en: "Search your deck for a Metal Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck un Pokémon Metal, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spinning Attack",
				fr: "Attaque Tournante"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
