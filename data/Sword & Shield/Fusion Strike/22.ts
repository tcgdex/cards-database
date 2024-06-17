import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [812],
	set: Set,

	name: {
		en: "Rillaboom V",
		fr: "Gorythmic V",
		es: "Rillaboom V",
		it: "Rillaboom V",
		pt: "Rillaboom V",
		de: "Gortrom V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Drain Punch"
		},

		damage: 60,

		effect: {
			en: "Heal 30 damage from this Pokémon."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Drum Rush"
		},

		damage: 160
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
