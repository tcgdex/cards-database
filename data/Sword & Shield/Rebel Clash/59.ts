import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Electivire",
		fr: "Élekable"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek"
	},

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Shock",
				fr: "Éclair"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electrified Bolt",
				fr: "Foudre Électrifiée"
			},
			effect: {
				en: "If this Pokémon has any Special Energy attached, this attack does 90 more damage.",
				fr: "Si de l’Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 90 dégâts supplémentaires."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 140,
	types: ["Lightning"]
}

export default card
