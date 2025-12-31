import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Lickitung",
		fr: "Excelangue"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "If this Pokémon's sticky saliva gets on you and\nyou don't clean it off, an intense itch will set in.\nThe itch won't go away, either.",
		fr: "Si sa salive gluante entre en contact avec la peau et qu'on ne l'essuie pas bien, elle provoque de terribles démangeaisons qui ne s'arrêtent jamais."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stretch Tongue",
			fr: "Langue à Rallonge"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon.",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card