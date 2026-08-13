import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Cascoon",
		fr: "Blindalys",
		es: "Cascoon",
		it: "Cascoon",
		pt: "Cascoon",
		de: "Panekon"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		268,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
		de: "Waumpel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tangle Drag",
				fr: "Lasso Piège",
				de: "Wirrzieher"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with the Defending Pokémon.",
				fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec le Pokémon Défenseur.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen das Verteidigende Pokémon aus."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale Épuisante",
				de: "Spiralsauger"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It never forgets any attack it endured while in the cocoon. After evolution, it seeks payback.",
		de: "Es vergisst keinen Angriff, den es im Kokon erdulden musste. Nach der Entwicklung sinnt es auf Rache."
	},

	thirdParty: {
		cardmarket: 280448,
		tcgplayer: 84123
	}
}

export default card
