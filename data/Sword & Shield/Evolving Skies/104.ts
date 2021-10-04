import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Nickit",
		fr: "Goupilou",
		es: "Nickit",
		it: "Nickit",
		pt: "Nickit",
		de: "Kleptifux"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	illustrator: "Hasegawa Saki",

	attacks: [{
		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
			es: "Coletón",
			it: "Codabotta",
			pt: "Tail Whap",
			de: "Schweifvertrimmer"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "Cunning and cautious, this Pokémon survives by stealing food from others. It erases its tracks with swipes of its tail as it makes off with its plunder."
	},

	dexId: [827]
}

export default card