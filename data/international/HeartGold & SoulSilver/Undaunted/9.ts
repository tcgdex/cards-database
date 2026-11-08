import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Togekiss",
		'fr-fr': "Togekiss",
		'de-de': "Togekiss"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [468],

	hp: 120,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Togetic",
		'fr-fr': "Togetic"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blessed Wings",
				'fr-fr': "Ailes bénies",
				'de-de': "Gesegnete Schwingen"
			},
			effect: {
				'en-us': "Remove all damage counters from each of your Pokémon. Shuffle Togekiss and all cards attached to it back into your deck.",
				'fr-fr': "Retirez tous les marqueurs de dégât à chacun de vos Pokémon. Mélangez Togekiss et toutes les cartes qui lui sont attachées avec votre deck.",
				'de-de': "Entferne alle Schadensmarken von jedem deiner Pokémon. Mische Togekiss und alle daran angelegten Karten zurück in dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Air Cutter",
				'fr-fr': "Tranch’Air",
				'de-de': "Windschnitt"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 80,

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

	description: {
		'en-us': "As everyone knows, it visits peaceful regions, bringing them gifts of kindness and sweet blessings."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279262,
				tcgplayer: 89924
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279262,
				tcgplayer: 89924
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125046
			}
		}
	],

}

export default card
