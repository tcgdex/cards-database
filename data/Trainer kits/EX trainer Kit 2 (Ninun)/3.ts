import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Ninun)'

const card: Card = {
	dexId: [5],
	set: Set,

	name: {
		en: "Charmeleon"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Flare"
		},

		damage: 30
	}, {
		name: {
			en: "Damage Burn"
		},

		damage: "40+",

		effect: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 20 more damage."
		}
	}],

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		it: "Charmander",
		pt: "Charmander",
		de: "Glumanda"
	}
}

export default card