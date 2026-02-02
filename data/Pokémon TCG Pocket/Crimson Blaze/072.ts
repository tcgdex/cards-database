import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Reuniclus"
	},

	illustrator: "chibi",
	rarity: "One Star",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Duosion"
	},

	description: {
		en: "It's said that drinking the liquid surrounding\nReuniclus grants wisdom. Problem is, the liquid is\nhighly toxic to anything besides Reuniclus itself."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Infinite Increase"
		},

		effect: {
			en: "This Pokémon gets +30 HP for each {P} Energy attached to it."
		}
	}],

	attacks: [{
		name: {
			en: "Psypunch"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 3
}

export default card