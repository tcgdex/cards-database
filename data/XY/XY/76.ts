import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		687,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Mental Trash",
				fr: "Poubelle Mentale",
			},
			effect: {
				en: "Your opponent flips 4 coins. For each tails, he or she discards a card from his or her hand.",
				fr: "Votre adversaire lance 4 pièces. Pour chaque côté pile, il défausse une carte de sa main.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Distortion Beam",
				fr: "Rayon de Distorsion",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Asleep. If tails, your opponent’s Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
