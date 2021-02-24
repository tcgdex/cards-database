import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Arbok",
		fr: "Arbok",
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		24,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Ekans",
		fr: "Abo",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wrap",
				fr: "Ligotage",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Heavy Choke",
				fr: "Étouffement Lourd",
			},
			effect: {
				en: "If this Pokémon used Wrap during your last turn, this attack does 120 more damage.",
				fr: "Si ce Pokémon a utilisé Ligotage pendant votre dernier tour, cette attaque inflige 120 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
