import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Mew V",
		fr: "Mew V",
		es: "Mew V",
		it: "Mew V",
		pt: "Mew V",
		de: "Mew V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",
	retreat: 0,
	regulationMark: "E",
	illustrator: "Naoki Saito",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Energy Mix"
		},

		effect: {
			en: "Search your deck for an Energy card and attach it to 1 of your Fusion Strike Pokémon. Then, shuffle your deck."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Psychic Leap"
		},

		damage: 70,

		effect: {
			en: "You may shuffle this Pokémon and all attached cards into your deck."
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