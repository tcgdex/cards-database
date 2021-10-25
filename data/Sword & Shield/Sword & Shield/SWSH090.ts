import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Houndoom"
	},

	illustrator: "Uta",
	rarity: "None",
	category: "Pokemon",
	dexId: [229],
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Houndour"
	},

	description: {
		en: "Identifiable by its eerie howls, people a long time ago thought it was the grim reaper and feared it."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Single Strike Roar"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Single Strike Energy card and attach it to 1 of your Single Strike Pokémon. Then, shuffle your deck. If you attached Energy to a Pokémon in this way, put 2 damage counters on that Pokémon."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Darkness Fang"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card