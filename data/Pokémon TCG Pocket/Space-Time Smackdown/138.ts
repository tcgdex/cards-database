import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Lopunny"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Buneary"
	},

	description: {
		en: "Lopunny is constantly monitoring its surroundings. If danger approaches, this Pokémon responds with superdestructive kicks."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Jump Kick"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
