import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Metapod",
		fr: "Chrysacier",
		es: "Metapod",
		it: "Metapod",
		pt: "Metapod",
		de: "Safcon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
		es: "Caterpie",
		it: "Caterpie",
		pt: "Caterpie",
		de: "Raupy"
	},

	stage: "Stage1",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Saya Tsuruta",

	description: {
		en: "Even though it is encased in a sturdy shell, the body inside is tender. It can't withstand a harsh attack."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Exoskeleton"
		},

		effect: {
			en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Ram"
		},

		damage: 10
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card