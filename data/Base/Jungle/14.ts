import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Empiflor"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		71,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Weepinbell",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Lure",
				fr: "Attraction"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and switch it with his or her Active Pokémon.",
				fr: "Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et échangez-le avec son Pokémon Actif."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Acid",
				fr: "Acide"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire."
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

	description: {
		fr: "Il vit en colonie dans la jungle mais personne n'en est jamais revenu vivant."
	}
}

export default card
