import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [209],
	set: Set,

	name: {
		en: "Snubbull",
		fr: "Snubbull",
		es: "Snubbull",
		it: "Snubbull",
		pt: "Snubbull",
		de: "Snubbull"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kyoko Umemoto",

	description: {
		en: "In contrast to its appearance, it's quite timid. When playing with other puppy Pokémon, it sometimes gets bullied."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			de: "Kopfnuss",
			es: "Golpe Cabeza",
			pt: "Cabeçada",
			it: "Bottintesta"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

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
		cardmarket: 582615
	}
}

export default card