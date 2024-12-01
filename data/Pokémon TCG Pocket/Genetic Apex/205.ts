import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Ditto"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Copy Anything"
		},

		effect: {
			en: "CHose 1 of your opponent's Pokémon's attacks and use it as this attack. If this Pokémon doesn't ahve the necessary Energy to use that attack, this attack does nothing"
		}
	}],

	retreat: 1,
	rarity: "Three Diamond"
}

export default card
