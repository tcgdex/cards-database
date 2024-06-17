import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [863],
	set: Set,

	name: {
		en: "Galarian Perrserker",
		fr: "Berserkatt de Galar",
		es: "Perrserker de Galar",
		it: "Perrserker di Galar",
		pt: "Perrserker de Galar",
		de: "Galar-Mauzinger"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		en: "Galarian Meowth",
		fr: "Miaouss de Galar",
		es: "Meowth de Galar",
		it: "Meowth di Galar",
		pt: "Meowth de Galar",
		de: "Galar-Mauzi"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shigenori Negishi",

	description: {
		en: "After many battles, it evolved dangerous claws that come together to form daggers when extended."
	},

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Call to Muster"
		},

		effect: {
			en: "Search your deck for up to 2 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Headbang"
		},

		damage: 80
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card