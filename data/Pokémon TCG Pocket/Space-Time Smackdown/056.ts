import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Electabuzz"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		en: "Many power plants keep Ground-type Pokémon<br />around as a defense against Electabuzz that<br />come seeking electricity."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Charge"
		},

		cost: ["Lightning"],

		effect: {
			en: "Take a <span class=\"energy-text energy-text--type-lightning\"></span> Energy from your Energy Zone and attach it to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	
	boosters: [Dialga]
}

export default card