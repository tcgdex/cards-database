import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Combusken",
		fr: "Galifeu",
		de: "Jungglut"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		256,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Torchic",
		fr: "Poussifeu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Focus Energy",
				fr: "Puissance",
				de: "Energiefokus"
			},
			effect: {
				en: "During your next turn, Combusken's High Jump Kick attack's base damage is 70.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Pied voltige de Galifeu sont de 70.",
				de: "In deinem nächsten Zug beträgt der Grundschaden des Angriffs Turmkick 70 Schadenspunkte."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied voltige",
				de: "Turmkick"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277097,
		tcgplayer: 84407
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
