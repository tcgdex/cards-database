import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Grapploct",
		fr: "Krakos",
		es: "Grapploct",
		it: "Grapploct",
		pt: "Grapploct",
		de: "Kaocto"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Clobbopus",
		fr: "Poulpaf",
		es: "Clobbopus",
		it: "Clobbopus",
		pt: "Clobbopus",
		de: "Klopptopus"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Souichirou Gunjima",

	description: {
		en: "Searching for an opponent to test its skills against, it emerges onto land. Once the battle is over, it returns to the sea."
	},

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Lunge Out"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Magnum Punch"
		},

		damage: 90
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card