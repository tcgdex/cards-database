import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Slowking",
		fr: "Roigada",
	},

	illustrator: "Noriko Hotta",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Opponent’s Choice",
				fr: "Choix de l’adversaire",
			},
			effect: {
				en: "Once during your turn (before your attack), you may reveal the top 2 cards of your deck and your opponent chooses 1 of them. Put that card into your hand and the other card on the bottom of your deck. This power can’t be used if Slowking is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez dévoiler les 2 cartes du dessus de votre deck pour que votre adversaire choisisse l’une d’entre elles. Ajoutez cette carte à votre main et placez l’autre carte au dessous de votre deck. Ce pouvoir ne peut pas être utilisé si Roigada est affecté par un État Spécial.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
				fr: "Super psy",
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
	suffix: "Prime",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
