import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	dexId: [495],

	description: {
		en: "It is very intelligent and calm. Being exposed to lots of sunlight makes its movements swifter.",
		de: "Eine kühle Denkernatur. Bekommt es genügend Sonnenlicht ab, erhöht sich die Geschwindigkeit seiner Bewegungen."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Slam",
			fr: "Souplesse",
			de: "Slam"
		},

		damage: "20×",

		effect: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
		}
	}],

	name: {
		en: "Snivy",
		fr: "Vipélierre",
		de: "Serpifeu"
	},

	rarity: "None",
	hp: 60,
	types: ["Grass"],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281790,
				tcgplayer: 89378
			}
		}
	]
}

export default card

