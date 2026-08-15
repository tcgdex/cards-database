import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Leviator",
		de: "Garados"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [130],

	hp: 100,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
		de: "Karpador"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Dragon Crush",
				fr: "Écras'dragon",
				de: "Drachenmalmer"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each Defending Pokémon. Discard an Energy card from each Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chaque Pokémon Défenseur. Défaussez une carte Énergie de chacun de ces Pokémon.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff allen Verteidigenden Pokémon 10 Schadenspunkte zu. Lege eine Energiekarte von jedem Verteidigenden Pokémon auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Sonic",
				fr: "Aquasonique",
				de: "Aquaschall"
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
				fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch die Resistenz des Verteidigenden Pokémon nicht verringert."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85990,
				cardmarket: 275909
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85990,
				cardmarket: 275909
			},
		},
		{
			type: "normal",
			stamp: ["pre-release"],
			thirdParty: {
				tcgplayer: 239090,
				cardmarket: 275909
			},
		},
	],

}

export default card
