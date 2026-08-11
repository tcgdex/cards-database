import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Starmie",
		'fr-fr': "Staross",
		'de-de': "Starmie"
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
		'en-us': "Staryu",
		'fr-fr': "Stari"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],

			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Confuse Ray"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
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
				'en-us': "Core Stream",
				'fr-fr': "Courant central",
				'de-de': "Core Stream"
			},
			effect: {
				'en-us': "Choose an Energy type other than . This attack does 20 damage to each of your opponent's Pokémon with any Energy cards of that type attached to it. Don't apply Weakness and Resistance.",
				'fr-fr': "Choisissez un type d'Énergie autre que . Cette attaque inflige 20 dégâts à chaque Pokémon de votre adversaire possédant des cartes d'Énergie de ce type. N'appliquez ni la Faiblesse ni la Résistance.",
				'de-de': "Choose an Energy type other than . This attack does 20 damage to each of your opponent´s Pokémon with any Energy cards of that type attached to it. Don´t apply Weakness and Resistance."
			}

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "The center section of its body is called the core. It glows in a different color each time it is seen.",
		'fr-fr': "La section centrale de son corps est appelée \"cœur\". Elle luit d'une couleur différente à chaque fois qu'on la contemple."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274611,
				tcgplayer: 89527
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274611,
				tcgplayer: 89527
			}
		}
	]
}

export default card

