import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Airmure",
		de: "Panzaeron"
	},

	illustrator: "Masako Yamashita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [47],

	hp: 70,

	types: [
		"Grass"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Sleep Inducer",
				fr: "Bec d'acier",
				de: "Stahlschnabel"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it. The new Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Rapture Pollen",
				fr: "Taille-air",
				de: "Luftschneider"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, remove 2 damage counters from Parasect.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},

			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89234,
				cardmarket: 274902
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
