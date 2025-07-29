import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Monferno",
		fr: "Chimpenfeu",
		de: "Panpyro"
	},

	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		391,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Chimchar",
		fr: "Ouisticram",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Fang",
				fr: "Crocs Feu",
				de: "Feuerzahn"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mid-air Strike",
				fr: "Coup en l'air",
				de: "Sprunghieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	thirdParty: {
		cardmarket: 278090
	}
}

export default card
