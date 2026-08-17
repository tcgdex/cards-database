import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Venusaur EX",
		fr: "Florizarre-EX",
		de: "Bisaflor-EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 180,

	types: [
		"Grass",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frog Hop",
				fr: "Bond de Grenouille",
				de: "Froschhopser"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Impact",
				fr: "Impact Poison",
				de: "Gifteffekt"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 288421,
		tcgplayer: 113659
	}
}

export default card
