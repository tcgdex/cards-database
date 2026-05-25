import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Fennekin"
	},

	illustrator: "satoma",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [653],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Call for Family"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck."
		}
	}, {
		cost: ["Fire"],

		name: {
			en: "Steady Firebreathing"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 694694
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
