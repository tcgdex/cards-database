import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Golem",
		fr: "Grolem",
		es: "Golem",
		it: "Golem",
		pt: "Golem",
		de: "Geowaz"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch",
		es: "Graveler",
		it: "Graveler",
		pt: "Graveler",
		de: "Georok"
	},

	stage: "Stage2",
	retreat: 4,
	regulationMark: "E",
	illustrator: "KEIICHIRO ITO",

	description: {
		en: "It detonates its own body. The power from that explosion can propel it up steep mountain paths with amazing speed."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Desperate Blast"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, put 10 damage counters on the Attacking Pokémon."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Double-Edge"
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