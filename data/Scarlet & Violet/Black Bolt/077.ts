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

	rarity: "Common",
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
		cardmarket: 836064
	},

	variants: [{
		type: "normal",
		size: "standard",
		description: "Found in Booster Packs",
		set: "standard"
	}, {
		type: "reverse",
		size: "standard",
		description: "Found in Booster Packs",
		set: "parallel"
	}, {
		type: "reverse",
		size: "standard",
		foil: "pokeball",
		description: "Found in Booster Packs",
		set: "parallel"
	}, {
		type: "reverse",
		size: "standard",
		foil: "masterball",
		description: "Found in Booster Packs",
		set: "parallel"
	}]
}

export default card