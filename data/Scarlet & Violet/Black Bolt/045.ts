import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [529],
	set: Set,

	name: {
		en: "Drilbur",
		fr: "Rototaupe",
		de: "Rotomurf",
		it: "Drilbur",
		pt: "Drilbur",
		es: "Drilbur",
		'es-mx': "Drilbur"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
			de: "Lehmschelle",
			it: "Fangosberla",
			pt: "Tapa de Lama",
			es: "Bofetón Lodo",
			'es-mx': "Bofetón Lodo"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			de: "Korkenzieherhieb",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha",
			es: "Puño Tirabuzón",
			'es-mx': "Puño Sacacorchos"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835998
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