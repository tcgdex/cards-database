import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Swablu",
		fr: "Tylton",
		es: "Swablu",
		it: "Swablu",
		pt: "Swablu",
		de: "Wablu"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		333,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bind Wound",
				fr: "Blessure Pansée",
				es: "Vendar Herida",
				it: "Alacura",
				pt: "Ligar Ferida",
				de: "Wunden verbinden"
			},
			effect: {
				en: "Heal 20 damage from 1 of your Pokémon.",
				fr: "Soignez 20 dégâts à l'un de vos Pokémon.",
				es: "Cura 20 puntos de daño a 1 de tus Pokémon.",
				it: "Cura uno dei tuoi Pokémon da 20 danni.",
				pt: "Cure 20 de danos de 1 dos seus Pokémon.",
				de: "Heile 20 Schadenspunkte bei 1 deiner Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 282741,
		tcgplayer: 98109
	}
}

export default card
