import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Ferroseed",
		fr: "Grindur",
		de: "Kastadur",
		it: "Ferroseed",
		pt: "Ferroseed",
		es: "Ferroseed",
		'es-mx': "Ferroseed"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Zzzt",
			fr: "Bzzz",
			de: "Piiieks",
			it: "Bzzz",
			pt: "Bzzz",
			es: "Bzzz",
			'es-mx': "Bzzz"
		},

		damage: 10
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
			de: "Metallklaue",
			it: "Ferrartigli",
			pt: "Garra de Metal",
			es: "Garra Metal",
			'es-mx': "Garra de Metal"
		},

		damage: 40
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836028
	}
}

export default card