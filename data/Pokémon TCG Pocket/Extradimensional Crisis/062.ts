import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Celesteela"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		en: "One of the dangerous UBs, high energy readings<br />can be detected coming from both of its<br />huge arms."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Ultra Thrusters"
		},

		effect: {
			en: "Once during your turn, you may switch your Active Ultra Beast with 1 of your Benched Ultra Beasts."
		}
	}],

	attacks: [{
		name: {
			en: "Moombahton"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 4
}

export default card