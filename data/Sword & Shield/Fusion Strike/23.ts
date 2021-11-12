import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Rillaboom VMAX",
		fr: "Gorythmic VMAX",
		es: "Rillaboom VMAX",
		it: "Rillaboom VMAX",
		pt: "Rillaboom VMAX",
		de: "Gortrom VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	evolveFrom: {
		en: "Rillaboom V",
		fr: "Gorythmic-V",
		es: "Rillaboom V",
		it: "Rillaboom-V",
		pt: "Rillaboom V",
		de: "Gortrom-V"
	},

	stage: "VMAX",
	retreat: 3,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "G-Max Drum Solo"
		},

		damage: 180,

		effect: {
			en: "This attack also does 40 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card