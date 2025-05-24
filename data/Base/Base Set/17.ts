import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Beedrill",
		pt: "Beedrill",
		fr: "Dardargnan",
		de: "Bibor"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kakuna",
		pt: "Kakuna",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twineedle",
				pt: "Twineedle",
				fr: "Double-Dard",
				de: "Duonadel"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				pt: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt jedesmal, wenn die Münze Kopf zeigt, 30 Schadenspunkte zu."
			},
			damage: "30x",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Poison Sting",
				pt: "Poison Sting",
				fr: "Dard-Venin",
				de: "Giftstachel"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				pt: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf eine Münze. Bei Kopf ist das verteidigende Pokémon vergiftet."
			},
			damage: 40,

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
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il vole à très grande vitesse. Il se bat avec les dards empoisonnés de ses bras."
	}
}

export default card
