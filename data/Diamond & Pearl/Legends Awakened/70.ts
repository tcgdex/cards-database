import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Seadra",
		fr: "Hypocean",
		de: "Seemon"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		117,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Horsea",
		fr: "Seeper",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Aqua Pump",
				fr: "Aqua-pompe",
				de: "Aquapumpe"
			},
			effect: {
				en: "You may discard up to 2 Water Energy cards from your hand. If you do, this attack does 30 damage plus 10 more damage for each Energy card you discarded.",
				fr: "Vous pouvez défausser jusqu'à 2 cartes Énergie Water de votre main. Cette attaque inflige alors 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie défaussée.",
				de: "Du kannst bis zu 2 -Energiekarten von deiner Hand auf den Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf diese Weise auf den Ablagestapel gelegte Energiekarte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
				de: "Kaskade"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		fr: "Son épine dorsale le protège. Ses os et ses nageoires sont très prisés en médecine traditionnelle."
	},

	thirdParty: {
		cardmarket: 278219
	}
}

export default card
