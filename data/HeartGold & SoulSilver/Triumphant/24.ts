import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Kricketune",
		fr: "Mélokrik",
		de: "Zirpeise"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		402,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kricketot",
		fr: "Crikzik",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Entrancing Melody",
				fr: "Mélodie envoûtante",
				de: "Zaubermelodie"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade",
				de: "Zornklinge"
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 20 damage plus 20 more damage. If 2 of them are heads, this attack does 20 damage plus 40 more damage. If all of them are heads, this attack does 20 damage plus 100 more damage.",
				fr: "Lancez 3 pièces. Si vous obtenez une fois un côté face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires. Si vous obtenez deux fois un côté face, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires. Si vous obtenez chaque fois un côté face, cette attaque inflige 20 dégâts plus 100 dégâts supplémentaires.",
				de: "Wirf 3 Münzen. Bei 1 Mal \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei 2 Mal \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 40 weitere Schadenspunkte zu. Bei 3 Mal \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 100 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "By allowing its cry to resonate in the hollow of its belly, it produces a captivating sound."
	},

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'reverse', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 279554,
		tcgplayer: 86534
	}
}

export default card
