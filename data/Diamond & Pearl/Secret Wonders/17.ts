import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Roserade",
		fr: "Roserade",
		de: "Roserade"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		407,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Roselia",
		fr: "Roselia",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Poison",
				fr: "Poison dodo",
				de: "Schlafgift"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
				de: "Das Verteidigende Pokémon schläft jetzt und ist vergiftet."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magical Leaf",
				fr: "Feuillemagik",
				de: "Zauberblatt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage and remove 3 damage counters from Roserade.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires. Retirez à Roserade 3 marqueurs de dégât.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu und entferne 3 Schadensmarken von Roserade."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
