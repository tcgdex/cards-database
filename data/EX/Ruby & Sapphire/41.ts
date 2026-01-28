import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Marshtomp",
		fr: "Flobio",
		de: "Moorabbel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		259,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Mudkip",
		fr: "Gobou"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Natural Cure",
				fr: "Remède naturel",
				de: "Innere Kraft"
			},
			effect: {
				en: "When you attach a Water Energy from your hand to Marshtomp, remove all Special Conditions from Marshtomp.",
				fr: "Lorsque vous attachez une carte Énergie  de votre main à Flobio, retirez-lui tous ses États Spéciaux.",
				de: "Wenn du eine -Energiekarte an Moorabbel anlegst, verlieren alle Speziellen Zustände auf Moorabbel ihre Wirkung."
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
				en: "Aqua Sonic",
				fr: "Aquasonique",
				de: "Aquaschall"
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
				fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch die Resistenz des Verteidigenden Pokémon nicht verringert."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275688,
		tcgplayer: 87233
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
