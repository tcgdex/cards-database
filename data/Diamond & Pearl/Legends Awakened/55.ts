import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Gliscor",
		fr: "Scorvol",
		de: "Skorgro"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		472,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Gligar",
		fr: "Skorgla",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik",
				de: "Gifthieb"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Tail",
				fr: "Queue tranchante",
				de: "Scharfer Schweif"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 40 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 40 weitere Schadenspunkte zu."
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

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il guette sa proie, pendu à une branche la tête en bas, et s'en saisit à la première occasion."
	}
}

export default card
