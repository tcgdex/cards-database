import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Zapdos",
		fr: "Electhor",
		de: "Zapdos"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Lightning Burn",
				fr: "Brûlure éclairante",
				de: "Blitzbrand"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If tails, Zapdos does 30 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Si c'est pile, Electhor s'inflige 30 dégâts.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Bei \"Zahl\" fügt Zapdos sich selbst 30 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278739
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
