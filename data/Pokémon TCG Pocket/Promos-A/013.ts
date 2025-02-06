import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Butterfree"
	},

	illustrator: "miki kudo",
	rarity: "None",
	category: "Pokemon",
	types: ["Grass"],
	stage: "Stage2",

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
		name: {
			en: "Gust"
		},

		cost: ["Grass", "Colorless", "Colorless"],
		damage: 60
	}],

	hp: 120,

	evolveFrom: {
		en: "Metapod"
	},

	description: {
		en: "In battle, it flaps its wings at great speed to<br />release highly toxic dust into the air."
	},

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card