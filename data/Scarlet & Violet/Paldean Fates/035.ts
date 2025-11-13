import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [547],
	set: Set,

	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
		es: "Whimsicott",
		it: "Whimsicott",
		pt: "Whimsicott",
		de: "Elfun"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
		es: "Cottonee",
		it: "Cottonee",
		pt: "Cottonee",
		de: "Waumboll"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
			es: "Viento Feérico",
			it: "Vento di Fata",
			pt: "Vento de Fada",
			de: "Feenbrise"
		},

		damage: 50
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "KYUPIYAMA",

	thirdParty: {
		cardmarket: 751572
	}
}

export default card