import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Naganadel-GX",
		fr: "Mandrillon-GX",
	},
	illustrator: "ConceptLab",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		804,
	],
	hp: 210,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Poipole",
		fr: "Vémini",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ultra Conversion",
				fr: "Ultra-Conversion",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard an Ultra Beast card from your hand. If you do, draw 3 cards.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Ultra-Chimère de votre main. Dans ce cas, piochez 3 cartes.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venom Shot",
				fr: "Tir Venin",
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon. This attack does 170 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige 170 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Injection-GX",
				fr: "Injection-GX",
			},
			effect: {
				en: "Add a card from your opponent's discard pile to their Prize cards face down. (You can't use more than 1 GX attack in a game.)",
				fr: "Ajoutez une carte de la pile de défausse de votre adversaire à ses cartes Récompense, face cachée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
