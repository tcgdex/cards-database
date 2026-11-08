import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Gardevoir",
		'fr-fr': "Gardevoir",
		'de-de': "Guardevoir"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Heal Dance",
				'fr-fr': "Danse guérisseuse",
				'de-de': "Heal Dance"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may remove 2 damage counters from 1 of your Pokémon. You can't use more than 1 Heal Dance Poké-Power each turn. This power can't be used if Gardevoir is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez retirer 2 marqueurs de dégât à 1 de vos Pokémon. Vous ne pouvez pas utiliser plus d'1 Poké-Power Danse Guérisseuse par tour. Ce pouvoir ne peut pas être utilisé si Gardevoir est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), you may remove 2 damage counters from 1 of your Pokémon. You can't use more than 1 Heal Dance Poke-Power each turn. This power can't be used if Guardevoir if affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psypunch",
				'fr-fr': "Coup de poing psy",
				'de-de': "Psypunch"
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mind Shock",
				'fr-fr': "Choc cérébral",
				'de-de': "Mind Shock"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'de-de': "This attack's damage isn't affected by Weakness or Resistance."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 85633,
		cardmarket: 276515
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85633,
				cardmarket: 276515
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85633,
				cardmarket: 276515
			},
		}
	],
}

export default card
