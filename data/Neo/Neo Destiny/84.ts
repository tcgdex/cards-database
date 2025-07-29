import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Swinub",
		fr: "Marcacrin",
		de: "Quiekel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		220,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Generate Cold",
				fr: "Émanations glaciales",
				de: "Generate Cold"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

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
			value: "-30"
		},
	],

	description: {
		fr: "Il avance, son nez ultra-sensible contre le sol, toujours à la recherche de nourriture."
	},

	thirdParty: {
		cardmarket: 274736
	}
}

export default card
