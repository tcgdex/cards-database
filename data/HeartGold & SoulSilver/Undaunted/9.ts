import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Togekiss",
		fr: "Togekiss",
		de: "Togekiss"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		468,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Togetic",
		fr: "Togetic",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blessed Wings",
				fr: "Ailes bénies",
				de: "Gesegnete Schwingen"
			},
			effect: {
				en: "Remove all damage counters from each of your Pokémon. Shuffle Togekiss and all cards attached to it back into your deck.",
				fr: "Retirez tous les marqueurs de dégât à chacun de vos Pokémon. Mélangez Togekiss et toutes les cartes qui lui sont attachées avec votre deck.",
				de: "Entferne alle Schadensmarken von jedem deiner Pokémon. Mische Togekiss und alle daran angelegten Karten zurück in dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Cutter",
				fr: "Tranch’Air",
				de: "Windschnitt"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
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
		en: "As everyone knows, it visits peaceful regions, bringing them gifts of kindness and sweet blessings."
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	thirdParty: {
		cardmarket: 279262,
		tcgplayer: 89924
	}
}

export default card
