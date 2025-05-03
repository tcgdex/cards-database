import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Butterfree"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: {
		en: "Metapod"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Powder Heal"
		},

		effect: {
			en: "Once during your turn, you may heal 20 damage from each of your Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Gust"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		en: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
	}
}

export default card
