import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul"
	},
	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Vanillish",
		fr: "Sorboul"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bitter Cold",
				fr: "Froid Mordant"
			},
			effect: {
				en: "Once during your turn, if this Pokémon is in the Active Spot, you may flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez lancer une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Frost Smash",
				fr: "Impact Glacial"
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
