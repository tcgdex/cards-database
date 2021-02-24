import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Octillery",
		fr: "Octillery",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		224,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Remoraid",
		fr: "Rémoraid",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ink Spit",
				fr: "Sepia’Crachat",
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Special Artillery",
				fr: "Artillerie Spéciale",
			},
			effect: {
				en: "You may discard a Special Energy from this Pokémon. If you do, this attack does 80 more damage.",
				fr: "Vous pouvez défausser une Énergie spéciale attachée à ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 40,

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
