import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Nosepass",
		fr: "Tarinor",
		de: "Nasgnet"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		299,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Reversal",
				fr: "Renversement magnétique",
				de: "Magnetic Reversal"
			},
			effect: {
				en: "Once during your turn (before your attack), if Nosepass is your Active Pokémon, you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. This power can't be used if Nosepass is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Tarinor est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger. Ce pouvoir ne peut pas être utilisé si Tarinor est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), if Nosepass is your Active Pokémon, you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent choose the Defending Pokémon to switch. This power can't be used if Nosepass is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sharpen",
				fr: "Affûtage",
				de: "Sharpen"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 87798,
		cardmarket: 276445
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
