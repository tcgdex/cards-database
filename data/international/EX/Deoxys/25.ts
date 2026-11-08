import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Shiftry",
		'fr-fr': "Tengalice",
		'de-de': "Tengulist"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		275,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Fan Action",
				'fr-fr': "Coup d'ventilateur",
				'de-de': "Fan Action"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. Your opponent chooses the Benched Pokémon to switch. This power can't be used if Shiftry is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez échanger 1 des Pokémon Défenseurs avec 1 des Pokémon de Banc de votre adversaire. Votre adversaire choisit le Pokémon de Banc à échanger. Ce pouvoir ne peut pas être utilisé si Tengalice est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), you may switch 1 of the Defending Pokémon with 1 of your opponent´s Benched Pokémon. Your opponent chooses the Pokémon to switch. This power can´t be used if Shiftry is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stadium Power",
				'fr-fr': "Stade puissant",
				'de-de': "Stadium Power"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 50 damage plus 20 more damage.",
				'fr-fr': "Si une carte Stade est en jeu, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If there is any Sadium card in play, this attack does 50 damage plus 20 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89155,
				cardmarket: 276428
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89155,
				cardmarket: 276428
			},
		},
	],

}

export default card
