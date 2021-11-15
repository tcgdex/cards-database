import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Gardevoir",
		fr: "Gardevoir"
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
		en: "Kirlia",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Heal Dance",
				fr: "Danse guérisseuse"
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove 2 damage counters from 1 of your Pokémon. You can't use more than 1 Heal Dance Poké-Power each turn. This power can't be used if Gardevoir is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez retirer 2 marqueurs de dégât à 1 de vos Pokémon. Vous ne pouvez pas utiliser plus d'1 Poké-Power Danse Guérisseuse par tour. Ce pouvoir ne peut pas être utilisé si Gardevoir est affecté par un État Spécial."
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
				en: "Psypunch",
				fr: "Coup de poing psy"
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
				en: "Mind Shock",
				fr: "Choc cérébral"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance."
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





}

export default card
