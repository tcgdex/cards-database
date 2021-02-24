import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Emboar",
		fr: "Roitiflam",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		500,
	],
	hp: 170,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Pignite",
		fr: "Grotichon",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Explosive Fire Dance",
				fr: "Danse du Feu Explosive",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may look at the top 8 cards of your deck and attach any number of basic Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez regarder les 8 cartes du dessus de votre deck, puis attacher le nombre désiré de cartes Énergie de base trouvées à vos Pokémon, de la manière que vous voulez. Mélangez les autres cartes avec votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
			},

			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
