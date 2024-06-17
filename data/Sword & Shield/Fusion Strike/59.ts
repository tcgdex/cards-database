import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [184],
	set: Set,

	name: {
		en: "Azumarill",
		fr: "Azumarill",
		es: "Azumarill",
		it: "Azumarill",
		pt: "Azumarill",
		de: "Azumarill"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Marill",
		fr: "Marill",
		es: "Marill",
		it: "Marill",
		pt: "Marill",
		de: "Marill"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Sanosuke Sakuma",

	description: {
		en: "The bubble-like pattern on its stomach helps it camouflage itself when it's in the water."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Dive and Rescue"
		},

		effect: {
			en: "Put up to 3 in any combination of Pokémon and Supporter cards from your discard pile into your hand."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Surf"
		},

		damage: 90
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card