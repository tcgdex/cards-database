import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Zoroark-GX",
		fr: "Zoroark-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		571,
	],
	hp: 210,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Trade",
				fr: "Troc",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 2 cards.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Dans ce cas, piochez 2 cartes.",
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
				en: "Riotous Beating",
				fr: "Méchante Raclée",
			},
			effect: {
				en: "This attack does 20 damage for each of your Pokémon in play.",
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Trickster-GX",
				fr: "Histrion-GX",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon's attacks and use it as this attack. (You can't use more than 1 GX attack in a game.)",
				fr: "Choisissez l’une des attaques des Pokémon de votre adversaire et utilisez-la en tant que cette attaque. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

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
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
