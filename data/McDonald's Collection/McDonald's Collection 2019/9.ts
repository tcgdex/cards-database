import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",

	dexId: [95],

	description: {
		en: "It usually lives underground. It searches for food while boring its way through the ground at 50 miles per hour.",
		de: "Es lebt gewöhnlich unter der Erde. Während es sich mit 80 km/h durchs Erdreich bohrt, sucht es nach Nahrung."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Screech",
			de: "Kreideschrei"
		},

		effect: {
			en: "During your next turn, the Defending Pokémon takes 20 more damage from attacks (after applying Weakness and Resistance).",
			de: "Während deines nächsten Zuges werden dem Verteidigenden Pokémon durch Attacken 20 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}, {
		name: {
			en: "Rage",
			de: "Raserei"
		},

		damage: "10+",

		effect: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			de: "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
		}
	}],

	name: {
		en: "Onix",
		de: "Onix"
	},

	rarity: "None",
	hp: 100,
	types: ["Fighting"],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412889,
				tcgplayer: 200973
			}
		}
	]
}

export default card

