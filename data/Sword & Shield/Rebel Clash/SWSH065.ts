import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Eevee V"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",
	dexId: [133],
	hp: 190,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect"
		},

		effect: {
			en: "Draw 3 cards."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Brave Buddies"
		},

		effect: {
			en: "If you played a Supporter card from your hand during this turn, this attack does 80 more damage."
		},

		damage: "80+"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card