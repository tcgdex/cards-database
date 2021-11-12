import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Darmanitan",
		fr: "Darumacho de Galar",
		es: "Darmanitan de Galar",
		it: "Darmanitan di Galar",
		pt: "Darmanitan de Galar",
		de: "Galar-Flampivian"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Galarian Darumaka",
		fr: "Darumarond de Galar",
		es: "Darumaka de Galar",
		it: "Darumaka di Galar",
		pt: "Darumaka de Galar",
		de: "Galar-Flampion"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "SATOSHI NAKAI",

	description: {
		en: "Though it has a gentle disposition, it's also very strong. It will quickly freeze the snowball on its head before going for a headbutt."
	},

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Powder Snow"
		},

		damage: 30,

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Daruma Headbutt"
		},

		damage: 130,

		effect: {
			en: "If this Pokémon has any damage counters on it, this attack can be used for Water."
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