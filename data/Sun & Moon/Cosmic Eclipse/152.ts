import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Florges",
		fr: "Florges",
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		671,
	],
	hp: 130,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Floette",
		fr: "Floette",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flower Picking",
				fr: "Cueillette de Fleurs",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may choose 2 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez choisir 2 cartes au hasard dans la main de votre adversaire. Votre adversaire montre ces cartes et les mélange avec son deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Petal Dance",
				fr: "Danse-Fleur",
			},
			effect: {
				en: "Flip 3 coins. This attack does 60 damage for each heads. This Pokémon is now Confused.",
				fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face. Ce Pokémon est maintenant Confus.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
