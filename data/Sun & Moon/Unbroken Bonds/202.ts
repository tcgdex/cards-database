import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Honchkrow-GX",
		fr: "Corboss-GX",
	},
	illustrator: "sadaji",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		430,
	],
	hp: 210,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ruler of the Night",
				fr: "Maître de la Nuit",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Pokémon Tool, Special Energy, or Stadium cards from their hand.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Outil Pokémon, de cartes Énergie spéciale ou de cartes Stade de sa main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Feather Storm",
				fr: "Volée de Plumes",
			},
			effect: {
				en: "This attack does 30 damage to 2 of your opponent's Benched Pokémon-GX and Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à 2 des Pokémon-GX et Pokémon-EX de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 90,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Unfair-GX",
				fr: "Injuste-GX",
			},
			effect: {
				en: "Your opponent reveals their hand. Discard 2 cards from it. (You can't use more than 1 GX attack in a game.)",
				fr: "Votre adversaire dévoile sa main. Défaussez-en 2 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
