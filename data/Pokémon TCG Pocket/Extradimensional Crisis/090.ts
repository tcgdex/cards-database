import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Growlithe"
	},

	description: {
		en: "An ancient picture scroll shows that people<br />were captivated by its movement as it ran<br />through prairies."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heat Tackle"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card