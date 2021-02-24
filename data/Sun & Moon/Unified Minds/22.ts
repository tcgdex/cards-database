import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Magmortar",
		fr: "Maganon",
	},
	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		467,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smoke Bomb",
				fr: "Bombe Fumante",
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack doesn't happen.",
				fr: "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, l’attaque n’est pas lancée.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
