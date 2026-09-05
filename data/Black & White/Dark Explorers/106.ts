import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Groudon-EX",
		fr: "Groudon-EX",
		es: "Groudon-EX",
		it: "Groudon-EX",
		pt: "Groudon-EX",
		de: "Groudon-EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		383,
	],

	hp: 180,

	types: [
		"Fighting",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Tromp",
				fr: "Piaffement",
				de: "Trampler"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Giant Claw",
				fr: "Griffe Géante",
				de: "Riesenklaue"
			},
			effect: {
				en: "If the Defending Pokémon already has 2 or more damage counters on it, this attack does 40 more damage.",
				fr: "Si le Pokémon Défenseur a déjà 2 marqueurs de dégâts ou plus, cette attaque inflige 40 dégâts supplémentaires.",
				de: "Wenn auf dem Verteidigenden Pokémon bereits 2 oder mehr Schadensmarken liegen, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
