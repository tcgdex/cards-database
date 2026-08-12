import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Axew",
		fr: "Coupenotte",
		es: "Axew",
		it: "Axew",
		pt: "Axew",
		de: "Milza"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		610,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dual Chop",
				fr: "Double Baffe",
				de: "Doppelhieb"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 10,

		},
	],

	retreat: 1,

	description: {
		en: "They use their tusks to crush the berries they eat. Repeated regrowth makes their tusks strong and sharp.",
		de: "Es knackt sich mit seinen Hauern Nüsse. Brechen seine Fangzähne ab, wächst an ihrer Stelle ein stärkeres Ersatzpaar."
	},

	thirdParty: {
		cardmarket: 280209,
		tcgplayer: 83668
	}
}

export default card
