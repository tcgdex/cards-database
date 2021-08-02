import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Accelgor",
		fr: "Limaspeed",
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		617,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Shelmet",
		fr: "Escargaume",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Raid",
				fr: "Razzia Obscure",
			},
			effect: {
				en: "If this Pokémon evolved from Shelmet during this turn, this attack does 40 more damage.",
				fr: "Si ce Pokémon a évolué d’Escargaume pendant ce tour, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Afterimage Strike",
				fr: "Frap’Invisible",
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks during your opponent’s next turn, flip a coin. If heads, prevent that damage.",
				fr: "Si des dégâts sont infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire, lancez une pièce. Si c’est face, évitez les dégâts.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
