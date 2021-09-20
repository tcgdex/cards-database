import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Wooper",
		fr: "Axoloto",
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		194,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Whip",
				fr: "Mouvemend’keu",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can’t attack during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur ne peut pas attaquer durant le prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Watering",
				fr: "Arrosage",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "When it walks around on the ground, it coats its body with a slimy, poisonous film."
	}
}

export default card
