import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [44],
	set: Set,

	name: {
		en: "Gloom",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Mega Drain",
		},

		effect: {
			en: "Heal 20 damage from this Pokémon.",
		},

		damage: 60
	}],

	variants: [
		{
			type: "normal",
			stamp: ["bulbasaur-silhouette"]
		},
	],

	illustrator: "Natsumi Yashida",

	thirdParty: {
		cardmarket: 741979,
		tcgplayer: 524010
	}
}

export default card