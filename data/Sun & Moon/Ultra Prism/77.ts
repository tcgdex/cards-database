import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Darkrai ◇",
		fr: "Darkrai ",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		491,
	],
	hp: 160,
	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Nightmare Star",
				fr: "Étoile Cauchemar",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach 2 Darkness Energy cards from your hand to it.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez lui attacher 2 cartes Énergie Darkness de votre main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Abyssal Sleep",
				fr: "Règle pour les cartes  (Prisme Étoile)",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep. Your opponent flips 2 coins instead of 1 between turns. If either of them is tails, that Pokémon is still Asleep.",
			},
			damage: 120,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				fr: "Sommeil Abyssal",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Votre adversaire lance 2 pièces au lieu d’une entre chaque tour. S’il obtient au moins un côté pile, le Pokémon reste Endormi.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
