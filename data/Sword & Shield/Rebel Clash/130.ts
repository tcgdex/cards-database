import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Smack",
				fr: "Claque"
			},

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gyro Ball",
				fr: "Gyroballe"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Échangez ce Pokémon contre l’un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif contre l’un de ses Pokémon de Banc."
			},
			damage: 70,

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
	hp: 130,
	types: ["Metal"],
	regulationMark: "D"
}

export default card
