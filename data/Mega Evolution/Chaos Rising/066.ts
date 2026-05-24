import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Goomy"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [704],
	hp: 60,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Absorb"
		},

		cost: ["Water", "Psychic"],
		damage: 30,

		effect: {
			en: "Heal 30 damage from this Pokémon."
		}
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693496
	}
}

export default card