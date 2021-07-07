import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Servine",
		fr: "Lianaja",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		496,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Snivy",
		fr: "Vipélierre",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Serpentine Strangle",
				fr: "Étranglement Serpentin",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez lancer une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet Lianes",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
