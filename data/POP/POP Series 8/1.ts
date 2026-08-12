import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Heatran",
		de: "Heatran"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		485,
	],

	hp: 100,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				de: "Bodyslam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
				de: "Feuerwirbel"
			},
			effect: {
				en: "Discard 2 basic Energy cards attached to Heatran. (If you can’t discard cards, this attack does nothing.)",
				de: "Entferne 2 Basis-Energiekarten von Heatran und lege sie auf deinen Ablagestapel. (Wenn du dies nicht tun kannst, hat dieser Angriff keine Auswirkungen.)"
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	description: {
		en: "It dwells in volcanic caves. It digs in with its cross-shaped feet to crawl on ceilings and walls.",
		de: "Es lebt in vulkanischen Höhlen. Mit seinen kreuzförmigen Klauen kann es sogar an der Decke laufen."
	},

	retreat: 3,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278402,
				tcgplayer: 86049
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 278402,
				tcgplayer: 86049
			}
		},
	],
}

export default card
