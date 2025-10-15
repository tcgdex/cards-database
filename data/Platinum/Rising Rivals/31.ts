import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Raichu GL",
		fr: "Raichu  Niv. 46",
		de: "Raichu GL"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Thunder Throw",
				fr: "Lancer de tonnerre",
				de: "Donnerwurf"
			},
			effect: {
				en: "Choose 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 des Pokémon de Banc de votre adversaire. Cette attaque leur inflige 10 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Wähle 2 Pokémon auf der Bank deines Gegners. Dieser Angriff fügt den gewählten Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Repeat Lightning",
				fr: "Éclair à répétition",
				de: "Mehrfachblitz"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each of your opponent's Benched Pokémon that has any damage counters on it.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire possédant des marqueurs de dégât.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Pokémon auf der Bank deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt, zu."
			},
			damage: "30+",

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
			type: "Metal",
			value: "-20"
		},
	],

	thirdParty: {
		tcgplayer: 88527
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
