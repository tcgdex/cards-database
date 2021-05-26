import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		143,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Layabout",
				fr: "Traîne-savates",
			},
			effect: {
				en: "Remove all damage counters from Snorlax. Snorlax can't use Layabout during your next turn.",
				fr: "Retirez tous ses marqueurs de dégâts à Ronflex. Ronflex ne peut pas utiliser Traîne-savates pendant votre prochain tour.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Clomp Clomp Clobber",
				fr: "Barda abasourdissant",
			},
			effect: {
				en: "Put 1 Energy card attached to Snorlax in the Lost Zone.",
				fr: "Placez 1 carte Énergie attachée à Ronflex dans la Zone Perdue.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
