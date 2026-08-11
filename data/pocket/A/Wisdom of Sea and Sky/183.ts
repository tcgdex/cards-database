import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Stantler",
		fr: "Cerfrousse"
	},

	illustrator: "Noriaki Tanimura",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [234],
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "This Pokémon apparently used to live in much\nharsher environments, and thus it once had\nstronger psychic powers than it does now.",
		fr: "Il paraît qu'autrefois, il était doté de plus grands pouvoirs psychiques, car il vivait dans un environnement hostile."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Enhanced Horns",
			fr: "Cornes Améliorées"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card