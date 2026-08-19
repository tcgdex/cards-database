import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Satoshi Shirai",
	category: "Pokemon",

	dexId: [103],

	description: {
		en: "As it grew taller and taller, it outgrew its reliance on psychic powers, while within it awakened the power of the sleeping dragon.",
		de: "Der Wachstumsschub machte seine Psycho-Kräfte überflüssig. Stattdessen wurden die in ihm schlafenden Drachen-Kräfte geweckt."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tropical Shake",
			de: "Tropisches Schütteln"
		},

		damage: "20+",

		effect: {
			en: "This attack does 20 more damage for each type of basic Energy card in your discard pile. You can’t add more than 100 damage in this way.",
			de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der verschiedenen Basis-Energiekarten-Typen in deinem Ablagestapel zu. Du kannst auf diese Weise höchstens 100 Schadenspunkte mehr zufügen."
		}
	}],

	name: {
		en: "Alolan Exeggutor",
		de: "Alola-Kokowei"
	},

	rarity: "None",
	hp: 160,
	types: ["Grass"],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	retreat: 3,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412854,
				tcgplayer: 200961
			}
		}
	]
}

export default card

