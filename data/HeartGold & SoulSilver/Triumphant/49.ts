import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Porygon2",
		fr: "Porygon2",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		233,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Porygon",
		fr: "Porygon",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Mapping",
				fr: "Mappage",
			},
			effect: {
				en: "Once during your turn, when you play Porygon2 from your hand to evolve 1 of your Pokémon, you may search your deck for a Stadium card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Une seule fois pendant votre tour, lorsque vous jouez Porygon2 dans votre main pour faire évoluer l'un de vos Pokémon, vous pouvez chercher une carte Stade dans votre deck, la montrer à votre adversaire et l'ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "3-D Attack",
				fr: "Attaque en 3-D",
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
