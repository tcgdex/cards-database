import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
		de: "Tentoxa"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		73,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacool"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Supersonic",
				fr: "Ultrason",
				de: "Superschall"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei 'Kopf' isdt das verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Jellyfish Sting",
				fr: "Dard-méduse",
				de: "Quallenstich"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das verteidgende Pokémon jetzt jetzt vergiftet."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Ses tentacules sont rétractés au repos. En situation de chasse, ils s'allongent."
	},

	thirdParty: {
		cardmarket: 273905,
		tcgplayer: 44446
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
