import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Morgrem"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Impidimp"
	},

	description: {
		en: "This Pokémon absorbs negative emotions and\nturns them into energy. It's popular with people\nwho tend to think gloomy thoughts."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "False Surrender"
		},

		damage: 50,
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card