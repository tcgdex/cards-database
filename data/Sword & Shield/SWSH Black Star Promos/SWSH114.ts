import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	description: {
		en: "Those who sleep holding Cresselia's feather are assured of joyful dreams. It is said to represent the crescent moon."
	},

	stage: "Basic",

	name: {
		en: "Cresselia"
	},

	rarity: "None",
	dexId: [488],
	hp: 120,
	types: ["Psychic"],

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

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E"
}

export default card
