import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Tauros",
		fr: "Tauros"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		128,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Crush Chance",
				fr: "Écras'chance"
			},
			effect: {
				en: "Once during your turn, when you put Tauros from your hand onto your Bench, you may discard a Stadium card in play.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Tauros de votre main sur votre Banc, vous pouvez défausser une carte Stade en jeu."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille"
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 Pokémon de base et placez-les sur votre Banc. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Attack",
				fr: "Koud'korne"
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





}

export default card
