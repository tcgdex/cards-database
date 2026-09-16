import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Marill"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [183],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	description: {
		en: "The oil-filled tail functions as a buoy, so it's fine even in rivers with strong currents."
	},

	attacks: [{
		name: {
			en: "Tackle"
		},

		cost: ["Psychic", "Colorless"],

		damage: 30,
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907674,
				tcgplayer: 716466
			}
		}
	],
}

export default card
