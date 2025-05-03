import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Toxapex"
	},

	illustrator: "chibi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Mareanie"
	},

	description: {
		en: "This Pokémon lives within a dome made by its own legs. Toxapex monitors its surroundings by sensing the flow of the tide through its spikes."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Spike Cannon"
		},

		damage: "20x",
		cost: ["Darkness"],

		effect: {
			en: "Flip 4 coins. This attack does 20 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card
