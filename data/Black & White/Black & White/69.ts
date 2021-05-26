import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Scrafty",
		fr: "Baggaïd",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		560,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Spit Acid",
				fr: "Crachat d’Acide",
			},
			effect: {
				en: "The Defending Pokémon is now Burned. Flip a coin. If heads, the Defending Pokémon is also Paralyzed.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé. Lancez une pièce. Si c’est face, le Pokémon Défenseur est aussi Paralysé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied Voltige",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
