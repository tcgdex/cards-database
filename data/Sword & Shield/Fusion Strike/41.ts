import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [631],
	set: Set,

	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
		es: "Heatmor",
		it: "Heatmor",
		pt: "Heatmor",
		de: "Furnifraß"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Oswaldo KATO",

	description: {
		en: "A flame serves as its tongue, melting through the hard shell of Durant so that Heatmor can devour their insides."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Flame Cloak"
		},

		damage: 20,

		effect: {
			en: "Attach a Fire Energy card from your discard pile to this Pokémon."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Exciting Flame"
		},

		damage: 90,

		effect: {
			en: "If this Pokémon has at least 3 extra Energy attached (in addition to this attack's cost), this attack also does 180 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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