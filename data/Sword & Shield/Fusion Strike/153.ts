import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [853],
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
			en: "Lunge Out",
			fr: "Allonger",
			de: "Sprungangriff",
			es: "Arremeter",
			pt: "Bote",
			it: "Affondo Lungo"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Magnum Punch",
			fr: "Poing Magnum",
			de: "Magnum-Schlag",
			es: "Puño Magnum",
			pt: "Soco Magnum",
			it: "Superpugno"
		},

		damage: 90
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582781
	}
}

export default card