import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Braségali",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		257,
	],
	hp: 150,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Firestarter",
				fr: "Pyroteknik",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fire de votre pile de défausse à l’un de vos Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Stream",
				fr: "Courant de Feu",
			},
			effect: {
				en: "Discard a Fire Energy from this Pokémon. This attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez une Énergie Fire de ce Pokémon. Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
