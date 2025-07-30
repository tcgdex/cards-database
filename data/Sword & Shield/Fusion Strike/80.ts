import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [833],
	set: Set,

	name: {
		en: "Chewtle",
		fr: "Khélocrok",
		es: "Chewtle",
		it: "Chewtle",
		pt: "Chewtle",
		de: "Kamehaps"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Saya Tsuruta",

	description: {
		en: "It starts off battles by attacking with its rock-hard horn, but as soon as the opponent flinches, this Pokémon bites down and never lets go."
	},

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			de: "Biss",
			es: "Mordisco",
			pt: "Mordida",
			it: "Morso"
		},

		damage: 30
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582214
	}
}

export default card