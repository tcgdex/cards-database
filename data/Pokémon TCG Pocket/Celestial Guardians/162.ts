import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Vulpix"
	},

	illustrator: "tono",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "After long years in the ever-snowcapped mountains of Alola, this Vulpix has gained power over ice."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Call Forth Cold"
		},

		cost: ["Water"],

		effect: {
			en: "Take a Water Energy from your Energy Zone and attach it to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card
