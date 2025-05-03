import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Alakazam"
	},

	illustrator: "Mousho",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Kadabra"
	},

	description: {
		en: "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Psychic Suppression"
		},

		damage: 80,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "This attack also does 20 damage to each of your opponent's Benched Pokémon that has any Energy attached."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card