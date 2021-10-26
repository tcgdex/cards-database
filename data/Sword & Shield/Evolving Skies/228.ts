import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Cresselia",
		fr: "Cresselia",
		es: "Cresselia",
		it: "Cresselia",
		pt: "Cresselia",
		de: "Cresselia"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Toyste Beach",
	dexId: [488],

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
	regulationMark: "E"
}

export default card
