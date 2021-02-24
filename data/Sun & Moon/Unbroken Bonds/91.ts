import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Marowak",
		fr: "Ossatueur",
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 110,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Bone Rush",
				fr: "Charge-Os",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 50 damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 50 dégâts pour chaque côté face.",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Assault Boom",
				fr: "Dégât d’Assaut",
			},
			effect: {
				en: "If your opponent's Active Pokémon has a Pokémon Tool card attached to it, this attack does 70 more damage.",
				fr: "Si une carte Outil Pokémon est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 70,

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
