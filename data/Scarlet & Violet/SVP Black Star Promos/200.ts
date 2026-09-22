import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee",
	},

	illustrator: "Kariya",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [133],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Call for Family",
	},

		effect: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
	}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gnaw",
	},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 826138,
				tcgplayer: 637077
			}
		}
	]
}

export default card
