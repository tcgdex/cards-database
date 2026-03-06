import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Rayquaza",
		fr: "Rayquaza",
		de: "Rayquaza"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dragon Aura",
				fr: "Aura de dragon",
				de: "Dragon Aura"
			},
			effect: {
				en: "As long as Rayquaza has any basic Fire Energy cards and any basic Lightning Energy cards attached to it, prevent all effects, except damage, by an opponent's attack done to Rayquaza.",
				fr: "Tant que Rayquaza possède des cartes Énergie de base  et , prévenez tous les effets, dégâts inclus, infligés à Rayquaza par une attaque de votre adversaire.",
				de: "As long as Rayquaza has any basic  Energy cards and any basic  Energy card attached to it, prevent all effects, except damage, by an opponent's attack done to Rayquaza."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tumbling Attack",
				fr: "Attaque trébuchante",
				de: "Tumbling Attack"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 88625,
		cardmarket: 276425
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["gym-challenge"]
		},
		{
			type: "normal",
			stamp: ["pokemon-day"]
		},
	]
}

export default card
