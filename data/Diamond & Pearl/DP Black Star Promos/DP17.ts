import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Dialga",
		fr: "Dialga"
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		483,
	],
	hp: 120,
	types: [
		"Metal",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Time Skip",
				fr: "Bond temporel"
			},
			effect: {
				en: "Once during your turn (before your attack), you may have your opponent flip 2 coins. If both of them are heads, your turn ends. If both of them are tails, after your opponent draws a card at the beginning of his or her next turn, his or her turn ends. This power can't be used if Dialga is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez demander à votre adversaire de lancer 2 pièces. Si ce sont 2 faces, votre tour se termine. Si ce sont 2 piles, le tour de votre adversaire se termine après qu'il ou elle ait pioché une carte au début de son prochain tour. Ce pouvoir ne peut pas être utilisé si Dialga est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Flash",
				fr: "Flash métallique"
			},
			effect: {
				en: "During your next turn, Dialga can't use Metal Flash.",
				fr: "Lors de votre prochain tour, Dialga ne peut pas utiliser Flash métallique."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
