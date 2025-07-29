import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Horsea",
		fr: "Hypotrempe",
		de: "Seeper"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		116,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Fin Slap",
				fr: "Koud' nageoire",
				de: "Fin Slap"
			},
			effect: {
				en: "If an attack damaged Horsea during your opponent's last turn, this attack does 20 damage plus 10 more damage. If not, this attack does 20 damage.",
				fr: "Si une attaque a infligé des dégâts à Hypotrempe durant le dernier tour de votre adversaire, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires. Sinon, cette attaque inflige 20 dégâts.",
				de: "If an attack damaged Horsea during your opponent's last turn, this attack does 20 damage plus 10 more damage. If not, this attack does 20 damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Lorsqu'il est attaqué par un ennemi plus gros que lui, il nage rapidement hors d'atteinte en contrôlant habilement sa nageoire dorsale."
	},

	thirdParty: {
		cardmarket: 274462
	}
}

export default card
