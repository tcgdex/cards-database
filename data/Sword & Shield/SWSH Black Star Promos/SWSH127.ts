import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Souichirou Gunjima",
	category: "Pokemon",

	description: {
		en: "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions."
	},

	stage: "Basic",

	name: {
		en: "Eevee"
	},

	rarity: "None",
	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Be Prepared"
		},

		effect: {
			en: "Attach a basic Energy card from your hand to this Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Bite"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
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