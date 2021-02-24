import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Gorebyss",
		fr: "Rosabyss",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		368,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Croissance α",
			},
			effect: {
				fr: "Lorsque vous attachez une carte Énergie de votre main à ce Pokémon (excepté à la suite d'une attaque, d'un talent ou d'une carte Dresseur), vous pouvez attacher 2 cartes Énergie au lieu d'une.",
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
				en: "Psy Bolt",
				fr: "Choc Mental",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
