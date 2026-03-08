import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Lairon",
		fr: "Galegon",
		de: "Stollrak"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		305,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Aron",
		fr: "Galekid"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Iron Defense",
				fr: "Mûr de fer",
				de: "Iron Defense"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Lairon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Galegon lors du prochain tour de votre adversaire.",
				de: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Lairon during your opponent's next turn."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Headbutt"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 275818,
		tcgplayer: 86575
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
