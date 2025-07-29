import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross",
		de: "Starmie"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Staryu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],

			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Confuse Ray"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},

			damage: 10
		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Core Stream",
				fr: "Courant central",
				de: "Core Stream"
			},
			effect: {
				en: "Choose an Energy type other than . This attack does 20 damage to each of your opponent's Pokémon with any Energy cards of that type attached to it. Don't apply Weakness and Resistance.",
				fr: "Choisissez un type d'Énergie autre que . Cette attaque inflige 20 dégâts à chaque Pokémon de votre adversaire possédant des cartes d'Énergie de ce type. N'appliquez ni la Faiblesse ni la Résistance.",
				de: "Choose an Energy type other than . This attack does 20 damage to each of your opponent´s Pokémon with any Energy cards of that type attached to it. Don´t apply Weakness and Resistance."
			}

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "La section centrale de son corps est appelée \"cœur\". Elle luit d'une couleur différente à chaque fois qu'on la contemple."
	},

	thirdParty: {
		cardmarket: 274611
	}
}

export default card
