import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Totodile",
		fr: "Kaiminus",
		de: "Karnimani"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		158,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Leer",
				fr: "Groz'yeux",
				de: "Leer"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack Totodile during your opponent's next turn. (Benching or evolving either Pokémon ends this effect.)",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer Kaiminus pendant le prochain tour de votre adversaire. (Envoyer l'un des deux Pokémon sur son Banc ou le faire évoluer met fin à cet effet.)",
				de: "Flip a coin. If heads, the Defending Pokémon can't attack Totodile during your opponent's next turn. (Benching or evolving either Pokémon ends this effect.)"
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
				de: "Fury Swipes"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Flip 3 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Sa mâchoire super développée est puissante et capable de broyer n'importe quoi. Même ses dresseurs doivent être prudents."
	},

	thirdParty: {
		cardmarket: 274480,
		tcgplayer: 89992
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		},
		{
			type: "normal",
			size: "jumbo",
			stamp: ["25th-celebration"]
		}
	]
}

export default card
