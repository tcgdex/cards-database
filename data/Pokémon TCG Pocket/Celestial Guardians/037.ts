import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Turtonator"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		en: "Explosive substances coat the shell on its back. Enemies that dare attack it will be blown away by an immense detonation."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fire Spin"
		},

		damage: 90,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "Discard a Fire Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 4
}

export default card
