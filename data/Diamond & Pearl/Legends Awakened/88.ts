import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Chinchou",
		fr: "Loupio",
		de: "Lampi"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		170,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Razor Fin",
				fr: "Aileron-rasoir",
				de: "Rasierflosse"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Aqua Spark",
				fr: "Aqua-étincelle",
				de: "Aquafunke"
			},
			effect: {
				en: "If Chinchou has any Water Energy attached to it, this attack does 20 damage plus 10 more damage.",
				fr: "Si Loupio possède de l'Énergie Water, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				de: "Wenn an Lampi mindestens 1 -Energie angelegt ist, fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu"
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Il envoie des décharges électriques positives et négatives du bout des antennes pour paralyser sa proie."
	},

	thirdParty: {
		cardmarket: 278236,
		tcgplayer: 84309
	}
}

export default card
