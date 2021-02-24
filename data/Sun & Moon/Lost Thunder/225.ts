import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Alolan Ninetales-GX",
		fr: "Feunard d’Alola-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 200,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mysterious Guidance",
				fr: "Guide Mystérieux",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for up to 2 Item cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez chercher jusqu’à 2 cartes Objet dans votre deck, les montrer et les ajouter à votre main. Mélangez ensuite votre deck.",
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
				en: "Snowy Wind",
				fr: "Vent Neigeux",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 70,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Sublimation-GX",
				fr: "Sublimation-GX",
			},
			effect: {
				en: "If your opponent's Active Pokémon is an Ultra Beast, it is Knocked Out. (You can't use more than 1 GX attack in a game.)",
				fr: "Si le Pokémon Actif de votre adversaire est une Ultra-Chimère, il est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

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
