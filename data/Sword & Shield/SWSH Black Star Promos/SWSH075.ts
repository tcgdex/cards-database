import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [6],
	set: Set,
	illustrator: "The Pokémon Company Art Team",

	name: {
		en: "Special Delivery Charizard"
	},

	description: {
		en: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."
	},

	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],

	evolveFrom: {
		en: "Charmeleon"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Happy Delivery"
		},

		effect: {
			en: "Search your deck for up to 2 Item cards, reveal them, and put them into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Flamethrower"
		},

		effect: {
			en: "Discard an Energy from this Pokémon."
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
