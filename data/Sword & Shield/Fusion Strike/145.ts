import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [344],
	set: Set,

	name: {
		en: "Claydol",
		fr: "Kaorine",
		es: "Claydol",
		it: "Claydol",
		pt: "Claydol",
		de: "Lepumentas"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
		es: "Baltoy",
		it: "Baltoy",
		pt: "Baltoy",
		de: "Puppance"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		en: "It appears to have been born from clay dolls made by ancient people. It uses telekinesis to float and move."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rapid Spin"
		},

		damage: 30,

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Ancient Imprint"
		},

		effect: {
			en: "Put damage counters on your opponent's Active Pokémon until its remaining HP is 60."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card