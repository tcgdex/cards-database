import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Dialga",
		'fr-fr': "Dialga",
		'de-de': "Dialga"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [483],

	hp: 100,

	types: [
		"Metal"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Reverse Time",
				'fr-fr': "Temps inverse",
				'de-de': "Reverse Time"
			},
			effect: {
				'en-us': "Once during your turn, when you put Dialga from your hand onto your Bench, you may search your discard pile for up to 3 in any combination of Pokémon (excluding Pokémon LV.X) and basic Energy cards. Show them to your opponent and put them on top of your deck in any order.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous placez Dialga de votre main sur votre Banc, vous pouvez chercher dans votre pile de défausse n'importe quelle combinaison de jusqu'à 3 Pokémon (Pokémon NIV.X exclus) et cartes Énergie de base. Montrez-les à votre adversaire et placez-les au dessus de votre deck dans n'importe quel ordre.",
				'de-de': "Once during your turn, when you put Dialga from your hand onto your Bench, you may search your discard pile for up to 3 in any combination of Pokémon (excluding Pokémon LV.X) and basic Energy cards. Show them to your opponent and put them on top of your deck in any order."
			}
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
				'en-us': "Time-Space Traveling",
				'fr-fr': "Voyage espace-temps",
				'de-de': "Time-Space Traveling"
			},
			effect: {
				'en-us': "Draw cards until you have 7 cards in your hand.",
				'fr-fr': "Piochez des cartes jusqu'à ce que vous ayez 7 cartes en main.",
				'de-de': "Draw cards until you have 7 cards in your hand."
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

	description: {
		'en-us': "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity."
	},

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 84804,
				cardmarket: 278426
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278426,
				tcgplayer: 84804
			}
		}
	],

}

export default card
