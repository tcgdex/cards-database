import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Wigglytuff",
		fr: "Grodoudou lumineux"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Jigglypuff",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Evolution Song",
				fr: "Chant évolutionnaire"
			},
			effect: {
				en: "Your opponent may choose 1 of his or her Pokémon and search his or her deck for a card that evolves from that Pokémon. Your opponent attaches that card to that Pokémon. This counts as evolving that Pokémon. Either way, you may do the same, and then each player who searched shuffles his or her deck.",
				fr: "Votre adversaire peut choisir un de ses Pokémon et chercher dans son deck une carte Évolution de ce Pokémon. Votre adversaire attache cette carte à ce Pokémon. Quelle que soit sa décision, vous pouvez faire de même. Chaque joueur ayant cherché une carte mélange ensuite son deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 20,

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
			value: "-30"
		},
	],

	description: {
		fr: "Si deux d'entre eux se frottent l'un contre l'autre, ils ne peuvent plus se séparer. Ils aiment trop sentir la douceur de la fourrure l'un de l'autre."
	}
}

export default card
