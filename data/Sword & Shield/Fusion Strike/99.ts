import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Heliolisk",
		fr: "Iguolta",
		es: "Heliolisk",
		it: "Heliolisk",
		pt: "Heliolisk",
		de: "Elezard"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
		es: "Helioptile",
		it: "Helioptile",
		pt: "Helioptile",
		de: "Eguana"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kagemaru Himeno",

	description: {
		en: "One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gnaw"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Electrobullet"
		},

		damage: 60,

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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