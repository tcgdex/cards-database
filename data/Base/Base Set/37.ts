import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Nidorino",
		fr: "Nidorino",
		de: "Nidorino",
		it: "Nidorino"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		33,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nidoran♂",
		it: "Nidoran♂"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Kick",
				fr: "Double Pied",
				de: "Doppelkick",
				it: "Doppio calcio"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt jedesmal, wenn die Münze 'Kopf' zeigt, 30 Schadenspunkte zu.",
				it: "Lancia 2 volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa."
			},
			damage: "30x",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Drill",
				fr: "Empal' Korne",
				de: "Hornbohrer",
				it: "Perforcorno"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Très agressif, il est prompt à répondre à la violence. La corne sur sa tête est venimeuse.",
		it: "Pokémon aggressivo che attacca con rapidità. Il corno sulla sua testa secerne un potente veleno. LIV 25 N.33"
	},

	thirdParty: {
		cardmarket: 273732,
		tcgplayer: 42379
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
