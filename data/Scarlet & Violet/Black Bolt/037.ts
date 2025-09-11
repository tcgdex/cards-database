import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [577],
	set: Set,

	name: {
		en: "Solosis",
		fr: "Nucléos",
		de: "Monozyto",
		it: "Solosis",
		pt: "Solosis",
		es: "Solosis",
		'es-mx': "Solosis"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			de: "Walzer",
			it: "Rotolamento",
			pt: "Rolagem",
			es: "Rodar",
			'es-mx': "Rodada"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835981
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