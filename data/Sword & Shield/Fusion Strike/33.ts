import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		en: "Arcanine",
		fr: "Arcanin",
		es: "Arcanine",
		it: "Arcanine",
		pt: "Arcanine",
		de: "Arkani"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Yuu Nishida",

	description: {
		en: "A Pokémon that has long been admired for its beauty. It runs agilely as if on wings."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Fire Claws"
		},

		damage: 40
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Heat Tackle"
		},

		damage: 160,

		effect: {
			en: "This Pokémon also does 30 damage to itself."
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