import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Eevee"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "None",
	category: "Pokemon",
	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions."
	},

	stage: "Basic",

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

	retreat: 1
}

export default card