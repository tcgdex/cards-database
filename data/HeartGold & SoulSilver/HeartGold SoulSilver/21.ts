import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Furret",
		fr: "Fouinar",
		de: "Wiesenior"
	},

	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		162,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Sentret",
		fr: "Fouinette",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Find a Friend",
				fr: "Trouver un ami",
				de: "Freunde finden"
			},
			effect: {
				en: "Search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez un Pokémon dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Blow",
				fr: "Coup d’poing éclair",
				de: "Schnellschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It makes a nest to suit its long and skinny body. The nest is impossible for other Pokémon to enter."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 278993,
		tcgplayer: 85594
	}
}

export default card
