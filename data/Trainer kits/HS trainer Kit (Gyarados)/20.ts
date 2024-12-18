import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		en: "Gyarados"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Hydro Splash"
		},

		damage: 50
	}, {
		name: {
			en: "Hyper Beam"
		},

		damage: 80,

		effect: {
			en: "Discard an Energy card attached to the Defending Pokémon."
		}
	}],

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
		es: "Magikarp",
		it: "Magikarp",
		pt: "Magikarp",
		de: "Karpador"
	}
}

export default card