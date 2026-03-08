import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Phanpy",
		fr: "Phanpy",
		de: "Phanpy"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		231,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stampede",
				fr: "Sauve qui peut",
				de: "Zertrampeln"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Trembler",
				fr: "Tremblement de terre",
				de: "Beben"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each Defending Pokémon, and each Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chaque Pokémon Défenseur et les Paralysent.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff allen Verteidigenden Pokémon 10 Schadenspunkte zu und alle Verteidigenden Pokémon sind jetzt gelähmt."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275710,
		tcgplayer: 87996
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
