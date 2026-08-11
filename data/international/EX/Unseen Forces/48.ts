import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Smeargle",
		'fr-fr': "Queulorior",
		'de-de': "Farbeagle"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		235,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Makeover",
				'fr-fr': "Conversion",
				'de-de': "Makeover"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a basic Energy card attached to 1 of your Pokémon (excluding Pokémon-ex). If you do, search your discard pile for a basic Energy card (excluding the one you discarded) and attach it to that Pokémon. This power can't be used if Smeargle is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser une carte Énergie de base attachée à 1 de vos Pokémon (Pokémon-ex exclus). Choisissez alors dans votre pile de défausse une carte Énergie de base (celle que vous venez de défausser exclue) et attachez-la à ce Pokémon. Ce pouvoir ne peut pas être utilisé si Queulorior est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), you may discard a basic Energy card attached to 1 of your Pokémon (excluding Pokémon-ex). If you do, search your discard pile for a basic Energy card (excluding the one you discarded) and attach it to that Pokémon. This power can't be used if Smeargle is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Split Spiral Punch",
				'fr-fr': "Coup d'poing en demi spirale",
				'de-de': "Split Spiral Punch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89354,
				cardmarket: 276694
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89354,
				cardmarket: 276694
			},
		}
	],
}

export default card
