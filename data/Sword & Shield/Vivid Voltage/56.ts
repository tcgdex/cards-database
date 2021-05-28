import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Galvantula",
		fr: "Mygavolt"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Joltik",
		fr: "Statitik"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Stun Needle",
				fr: "Para-Dard"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Shocking Pursuit",
				fr: "Poursuite Choquante"
			},
			effect: {
				en: "This attack does 20 damage for each damage counter on your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
