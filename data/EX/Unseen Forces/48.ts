import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Smeargle",
		fr: "Queulorior",
		de: "Farbeagle"
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
				en: "Makeover",
				fr: "Conversion",
				de: "Makeover"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a basic Energy card attached to 1 of your Pokémon (excluding Pokémon-ex). If you do, search your discard pile for a basic Energy card (excluding the one you discarded) and attach it to that Pokémon. This power can't be used if Smeargle is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser une carte Énergie de base attachée à 1 de vos Pokémon (Pokémon-ex exclus). Choisissez alors dans votre pile de défausse une carte Énergie de base (celle que vous venez de défausser exclue) et attachez-la à ce Pokémon. Ce pouvoir ne peut pas être utilisé si Queulorior est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), you may discard a basic Energy card attached to 1 of your Pokémon (excluding Pokémon-ex). If you do, search your discard pile for a basic Energy card (excluding the one you discarded) and attach it to that Pokémon. This power can't be used if Smeargle is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Split Spiral Punch",
				fr: "Coup d'poing en demi spirale",
				de: "Split Spiral Punch"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Confused."
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

	thirdParty: {
		cardmarket: 276694,
		tcgplayer: 89354
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
