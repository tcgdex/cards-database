import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Bibarel",
		fr: "Castorno",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		400,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rest",
				fr: "Repos",
			},
			effect: {
				en: "Remove all Special Conditions and 4 damage counters from Bibarel. Bibarel is now Asleep.",
				fr: "Retirez à Castorno tous ses États Spéciaux ainsi que 4 marqueurs de dégât. Castorno est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
			},
			effect: {
				en: "Bibarel does 10 damage to itself.",
				fr: "Castorno s'inflige 10 dégâts.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
