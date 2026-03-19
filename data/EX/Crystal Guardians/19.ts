import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Grovyle δ",
		fr: "Massko δ",
		de: "Reptain"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		253,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Treecko",
		fr: "Arcko"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
				de: "Agilität"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Grovyle during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Massko lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die Reptain zugefügt werden."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277100
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
