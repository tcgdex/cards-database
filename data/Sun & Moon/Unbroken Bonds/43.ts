import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		80,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Yawn",
				fr: "Bâillement",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Three Strikes",
				fr: "Triple Risque",
			},
			effect: {
				en: "Flip 3 coins. This attack does 100 damage for each heads. If all of them are tails, you lose this game.",
				fr: "Lancez 3 pièces. Cette attaque inflige 100 dégâts pour chaque côté face. S’il n’y a que des côtés pile, vous perdez cette partie.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
