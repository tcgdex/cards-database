import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Cresselia"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",
	dexId: [488],
	hp: 120,
	types: ["Psychic"],

	description: {
		en: "Those who sleep holding Cresselia's feather are assured of joyful dreams. It is said to represent the crescent moon."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Crescent Glow"
		},

		effect: {
			en: "Search your deck for a Psychic Energy card and attach it to 1 of your Pokémon. If you go second and it's your first turn, instead search for up to 3 Psychic Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Photon Laser"
		},

		effect: {
			en: "If you have at least 5 Energy in play, this attack does 90 more damage."
		},

		damage: "30+"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card