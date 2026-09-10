import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Vaporeon-EX",
		fr: "Aquali-EX",
		de: "Aquana-EX"
	},

	illustrator: "Naoki Saito",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 180,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Bubble Drain",
				fr: "Vide Bulle",
				de: "Blasengully"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Deep Squall",
				fr: "Rafale Profonde",
				de: "Tiefer Sturm"
			},
			effect: {
				en: "This attack does 130 damage minus 10 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 130 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				de: "Dieser Angriff fügt 130 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: "130−",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 288408,
		tcgplayer: 113682
	}
}

export default card
