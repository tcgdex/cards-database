import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Komala"
	},

	illustrator: "GOTO minori",
	rarity: "One Star",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		en: "Komala spends its entire life sleeping. It feeds on leaves that contain a potent poison only Komala can break down."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Comatose"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, whenever you attach an Energy from your Energy Zone to it, it is now Asleep."
		}
	}],

	attacks: [{
		name: {
			en: "Rolling Tackle"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card