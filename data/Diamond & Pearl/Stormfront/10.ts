import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Sceptile",
		fr: "Sceptile",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		254,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Trans",
				fr: "Transfert d'énergie",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), move a Grass Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Sceptile is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), déplacez une carte Énergie Grass attachée à 1 de vos Pokémon sur 1 autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Jungko est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Leaf",
				fr: "Feuille poison",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon  Défenseur est maintenant Empoisonné.",
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slice Drain",
				fr: "Trancher jusqu'au bout",
			},
			effect: {
				en: "Remove 2 damage counters from Sceptile.",
				fr: "Retirez à Jungko 2 marqueurs de dégât.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
