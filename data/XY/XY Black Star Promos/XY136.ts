import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Noctowl BREAK",
		fr: "Noarfang TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		164,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Noctowl",
		fr: "Noarfang"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Night Scan",
				fr: "Observation Nocturne"
			},
			effect: {
				en: "Your opponent reveals his or her hand. This attack does 30 more damage for each Trainer card you find there.",
				fr: "Votre adversaire montre sa main. Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Dresseur que vous y trouvez."
			},
			damage: "60+",

		},
	],

	retreat: 0
}

export default card
