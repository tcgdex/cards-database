import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Starmie",
		fr: "Staross",
		es: "Starmie",
		it: "Starmie",
		pt: "Starmie",
		de: "Starmie"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
		es: "Staryu",
		it: "Staryu",
		pt: "Staryu",
		de: "Sterndu"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Megumi Mizutani",

	description: {
		en: "It rotates its geometrically shaped body to swim through the water. It always seems to be sending out mysterious radio waves."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Multishot Star"
		},

		effect: {
			en: "Discard any amount of Water Energy from this Pokémon. Then, for each Energy card you discarded in this way, choose 1 of your opponent's Pokémon and do 30 damage to it. (You can choose the same Pokémon more than once.) This damage isn't affected by Weakness or Resistance."
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card