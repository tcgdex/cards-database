import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	dexId: [25],

	description: {
		en: "A plan was recently announced to gather many Pikachu and make an electric power plant.",
		de: "Vor Kurzem wurden Pläne verkündet, mithilfe einer großen Anzahl an Pikachu ein ganzes Kraftwerk zu betreiben."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Iron Tail",
			de: "Eisenschweif"
		},

		damage: "20×",

		effect: {
			en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
			de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		}
	}],

	name: {
		en: "Pikachu",
		de: "Pikachu"
	},

	rarity: "None",
	hp: 60,
	types: ["Lightning"],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		}
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412874,
				tcgplayer: 200967
			}
		}
	]
}

export default card

