import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [873],
	set: Set,

	name: {
		en: "Frosmoth",
		fr: "Beldeneige",
		es: "Frosmoth",
		it: "Frosmoth",
		pt: "Frosmoth",
		de: "Mottineva"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Snom",
		fr: "Frissonille",
		es: "Snom",
		it: "Snom",
		pt: "Snom",
		de: "Snomnom"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "chibi",

	description: {
		en: "It shows no mercy to any who desecrate fields and mountains. It will fly around on its icy wings, causing a blizzard to chase offenders away."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Icy Wind"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Blizzard Loop"
		},

		damage: 160,

		effect: {
			en: "Put all Energy attached to this Pokémon into your hand."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card