import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Lickitung",
		fr: "Excelangue"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
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
			en: "Tongue Slap",
			fr: "Gros Coup de Langue"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card