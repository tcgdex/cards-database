import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [6],
	set: Set,
	illustrator: "Illus. & Direc. The Pokémon Company Art Team",

	name: {
		'en-us': "Special Delivery Charizard"
	},

	description: {
		'en-us': "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Charmeleon"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Happy Delivery"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Item cards, reveal them, and put them into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Flamethrower"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon."
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,

	variants: [
			{
				type: "holo",
			}
		],

	regulationMark: "D"
}

export default card
