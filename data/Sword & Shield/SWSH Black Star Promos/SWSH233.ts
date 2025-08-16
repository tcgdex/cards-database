import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [7],
	set: Set,

	name: {
		fr: "Carapuce",
		de: "Schiggy",
		es: "Squirtle",
		pt: "Squirtle",
		it: "Squirtle",
		en: "Squirtle"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Pistolet à O",
			de: "Aquaknarre",
			es: "Pistola Agua",
			pt: "Revólver d'Água",
			it: "Pistolacqua",
			en: "Water Gun"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "When it retracts its long neck into its shell, it squirts out water with vigorous force."
	},

	thirdParty: {
		cardmarket: 664339
	}
}

export default card