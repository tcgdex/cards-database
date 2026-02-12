import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		en: "Gyarados",
		fr: "Léviator"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it."
	},
	

	types: ["Water",],

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Hydro Splash",
			fr: "Hydro-éclaboussure"
		},

		damage: 50
	}, {
		name: {
			en: "Hyper Beam",
			fr: "Ultralaser"
		},

		damage: 80,

		effect: {
			en: "Discard an Energy card attached to the Defending Pokémon.",
			fr: "Défaussez une carte Énergie attachée au Pokémon Défenseur."
		}
	}],

	thirdParty: {
		tcgplayer: 85997
	}
}

export default card