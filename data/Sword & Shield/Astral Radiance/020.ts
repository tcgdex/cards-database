import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [723],
	set: Set,

	name: {
		en: "Dartrix",
		fr: "Efflèche",
		es: "Dartrix",
		it: "Dartrix",
		pt: "Dartrix",
		de: "Arboretoss"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Rowlet",
		fr: "Brindibou",
		es: "Rowlet",
		it: "Rowlet",
		pt: "Rowlet",
		de: "Bauz"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			it: "Alabattito",
			pt: "Asa",
			de: "Flattern"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Razor Wing",
			fr: "Aile Tranchante",
			es: "Ala Cortante",
			it: "Ala Tagliente",
			pt: "Asa Cortante",
			de: "Rasierflügel"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "Regularly basks in sunlight to gather power—presumably due to the frigid climate. Nonetheless, the edges of the blade quills set into its wings are keen as ever.",
	},

	thirdParty: {
		cardmarket: 658517,
		tcgplayer: 272220
	}
}

export default card