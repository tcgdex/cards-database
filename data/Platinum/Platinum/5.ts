import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Dialga",
		fr: "Dialga",
		de: "Dialga"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 100,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Reverse Time",
				fr: "Temps inverse",
				de: "Reverse Time"
			},
			effect: {
				en: "Once during your turn, when you put Dialga from your hand onto your Bench, you may search your discard pile for up to 3 in any combination of Pokémon (excluding Pokémon LV.X) and basic Energy cards. Show them to your opponent and put them on top of your deck in any order.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Dialga de votre main sur votre Banc, vous pouvez chercher dans votre pile de défausse n'importe quelle combinaison de jusqu'à 3 Pokémon (Pokémon NIV.X exclus) et cartes Énergie de base. Montrez-les à votre adversaire et placez-les au dessus de votre deck dans n'importe quel ordre.",
				de: "Once during your turn, when you put Dialga from your hand onto your Bench, you may search your discard pile for up to 3 in any combination of Pokémon (excluding Pokémon LV.X) and basic Energy cards. Show them to your opponent and put them on top of your deck in any order."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Time-Space Traveling",
				fr: "Voyage espace-temps",
				de: "Time-Space Traveling"
			},
			effect: {
				en: "Draw cards until you have 7 cards in your hand.",
				fr: "Piochez des cartes jusqu'à ce que vous ayez 7 cartes en main.",
				de: "Draw cards until you have 7 cards in your hand."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278426,
		tcgplayer: 84804
	}
}

export default card
