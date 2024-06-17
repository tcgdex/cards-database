import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [211],
	set: Set,

	name: {
		en: "Qwilfish",
		fr: "Qwilfish",
		es: "Qwilfish",
		it: "Qwilfish",
		pt: "Qwilfish",
		de: "Baldorfish"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "HYOGONOSUKE",

	description: {
		en: "The small spikes covering its body developed from scales. They inject a toxin that causes fainting."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect"
		},

		effect: {
			en: "Draw a card."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Spike Sting"
		},

		damage: 30
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card