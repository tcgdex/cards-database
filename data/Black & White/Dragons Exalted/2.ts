import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Skiploom",
		fr: "Floravol",
		es: "Skiploom",
		it: "Skiploom",
		pt: "Skiploom",
		de: "Hubelupf"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		188,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Hoppip",
		fr: "Granivol",
		de: "Hoppspross"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bullet Seed",
				fr: "Balle Graine",
				de: "Kugelsaat"
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 10,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		en: "It blooms when the weather warms. It floats in the sky to soak up as much sunlight as possible.",
		de: "Sobald es wärmer wird, blüht es auf. Es schwebt am Himmel und nimmt so viel Sonnenlicht auf wie möglich."
	},

	thirdParty: {
		cardmarket: 280441,
		tcgplayer: 89258
	}
}

export default card
