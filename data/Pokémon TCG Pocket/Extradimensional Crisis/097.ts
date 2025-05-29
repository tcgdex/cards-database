import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeot"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		en: "Pidgeotto"
	},

	description: {
		en: "When hunting, it skims the surface of water<br />at high speed to pick off unwary prey such<br />as Magikarp."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Drive Off"
		},

		effect: {
			en: "Once during your turn, you may switch out your opponent's Active Pokémon to the Bench. <em>(Your opponent chooses the new Active Pokémon.)</em>"
		}
	}],

	attacks: [{
		name: {
			en: "Wing Attack"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card