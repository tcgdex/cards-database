import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Togekiss",
		'fr-fr': "Togekiss"
	},

	illustrator: "sui",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [468],
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Togetic"
	},

	description: {
		'en-us': "These Pokémon are never seen anywhere near\nconflict or turmoil. In recent times, they've hardly\nbeen seen at all.",
		'fr-fr': "Il ne se montre jamais en temps de guerre ou de conflit. Ces derniers temps, il est rare de le croiser."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Celestial Blessing",
			'fr-fr': "Bénédiction Céleste"
		},

		effect: {
			'en-us': "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			'fr-fr': "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez ces dégâts."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique"
		},

		damage: 70,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card