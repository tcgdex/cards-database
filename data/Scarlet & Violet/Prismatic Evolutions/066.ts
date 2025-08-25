import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [436],
	set: Set,

	name: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		pt: "Bronzor",
		it: "Bronzor",
		de: "Bronzel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			pt: "Martelada",
			it: "Martello",
			de: "Einhämmern"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Souichirou Gunjima",

	thirdParty: {
		cardmarket: 805455
	}
}

export default card