import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Miltank",
		fr: "Écrémeuh",
		de: "Miltank"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		241,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Milk Drink",
				fr: "Lait A Boire",
				de: "Milchgetränk"
			},
			effect: {
				en: "Flip 2 coins. Remove 2 damage counters times the number of heads from Miltank. If it has fewer damage counters than that, remove all of them.",
				fr: "Lancez 2 pièces. Retirez de Écrémeuh 2 marqueurs de dégâts multipliés par le nombre de faces. S'il a moins de marqueurs de dégâts que cela, retirez-les tous.",
				de: "Wirf zwei Münzen. Entferne zwei Schadensmarken mal der Anzahl 'Kopf' von Miltank. Falls es weniger Schadensmarken hat, entferne alle Schadensmarken von Miltank."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage",
				de: "Bodyslam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Son lait très riche est le meilleur breuvage pour les malades ou les souffreteux."
	},

	thirdParty: {
		cardmarket: 274441
	}
}

export default card
