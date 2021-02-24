import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Vivillon",
		fr: "Prismillon",
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		666,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Spewpa",
		fr: "Pérégrain",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Energy Color",
				fr: "Couleur d'Énergie",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez une carte Énergie de base dans votre deck et attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
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
				en: "Sleep Powder",
				fr: "Poudre Dodo",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
