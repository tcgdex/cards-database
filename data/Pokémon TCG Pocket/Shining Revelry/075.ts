import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Tatsugiri"
	},

	illustrator: "cochi8i",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "This is a small dragon Pokémon. It lives inside the mouth of Dondozo to protect itself from enemies on the outside."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Retreat Directive"
		},

		effect: {
			en: "Your Active Dondozo has no Retreat Cost."
		}
	}],

	attacks: [{
		name: {
			en: "Rain Splash"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card