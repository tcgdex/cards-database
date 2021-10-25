import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Arctozolt"
	},

	illustrator: "Hasuno",
	rarity: "None",
	category: "Pokemon",
	dexId: [881],
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		en: "Rare Fossil"
	},

	description: {
		en: "The shaking of its freezing upper half is what generates its electricity. It has a hard time walking around."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Biting Whirlpool"
		},

		effect: {
			en: "Whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Electro Ball"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card