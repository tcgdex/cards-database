import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Shiftry",
		fr: "Tengalice",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		275,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Leaf Draw",
				fr: "Pioche Feuille",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Grass Energy card from your hand. If you do, draw 3 cards.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Grass de votre main. Dans ce cas, piochez 3 cartes.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Deranged Dance",
				fr: "Danse Insensée",
			},
			effect: {
				en: "This attack does 20 damage times the number of Benched Pokémon (both yours and your opponent's).",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
