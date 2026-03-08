import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [627],
	set: Set,

	name: {
		en: "Rufflet",
		fr: "Furaiglon",
		de: "Geronimatz",
		it: "Rufflet",
		pt: "Rufflet",
		es: "Rufflet",
		'es-mx': "Rufflet"
	},

	illustrator: "Miki Tanaka",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peck",
			fr: "Picpic",
			de: "Pikser",
			it: "Beccata",
			pt: "Bicada",
			es: "Picotazo",
			'es-mx': "Picotazo"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Glide",
			fr: "Glissement",
			de: "Gleiten",
			it: "Aliante",
			pt: "Planeio",
			es: "Planeo",
			'es-mx': "Planeo"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836228
	}
}

export default card