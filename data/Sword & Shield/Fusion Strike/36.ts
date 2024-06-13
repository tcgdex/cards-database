import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [494],
	set: Set,

	name: {
		en: "Victini",
		fr: "Victini",
		es: "Victini",
		it: "Victini",
		pt: "Victini",
		de: "Victini"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Mitsuhiro Arita",

	description: {
		en: "When it shares the infinite energy it creates, that being's entire body will be overflowing with power."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Fiery Cheering"
		},

		effect: {
			en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon."
		}
	}, {
		cost: ["Fire"],

		name: {
			en: "Flare"
		},

		damage: 20
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card