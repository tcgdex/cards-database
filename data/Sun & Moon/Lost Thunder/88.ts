import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		178,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Natu",
		fr: "Natu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Gaze",
				fr: "Regard Énergisant",
			},
			effect: {
				en: "Your opponent reveals their hand. If you find any Energy cards there, this attack does 60 more damage.",
				fr: "Votre adversaire dévoile sa main. Si vous y trouvez des cartes Énergie, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Sphere",
				fr: "Sphère Psy",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
