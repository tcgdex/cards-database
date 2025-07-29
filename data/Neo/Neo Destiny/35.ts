import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Forretress",
		fr: "Foretress obscur",
		de: "Dunkles Forstellka"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		205,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Pineco",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Armor Up",
				fr: "Blindage",
				de: "Armor Up"
			},
			effect: {
				en: "Until the end of your next turn, if Dark Forretress would be Knocked Out by damage from an attack, flip a coin. If heads, Dark Forretress is not Knocked Out and its remaining HP become 10 instead.",
				fr: "Jusqu'à la fin de votre prochain tour, si Foretress obscur doit être mis K.O. par les dégâts d'une attaque, lancez une pièce. Si c'est face, Foretress obscur n'est pas mis K.O. et ses points de vie deviennent 10.",
				de: "Until the end of your next turn, if Dark Forretress would be Knocked Out by damage from an attack, flip a coin. If heads, Dark Forretress is not Knocked Out and its remaining HP become 10 instead."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Explosion",
				fr: "Explosion",
				de: "Explosion"
			},
			effect: {
				en: "Dark Forretress does 60 damage to itself.",
				fr: "Foretress obscur s'inflige 60 dégâts.",
				de: "Dark Forretress does 60 damage to itself."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Il reste immobile dans les arbres et chasse les intrus en leur lançant des piquants blindés."
	},

	thirdParty: {
		cardmarket: 274687
	}
}

export default card
