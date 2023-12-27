import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Luxray GL LV.X"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "LEVEL-UP",

	abilities: [{
		type: "Poke-POWER",

		name: {
			en: "Bright Look"
		},

		effect: {
			en: "Once during your turn (before your attack), when you put Luxray GL LV.X from your hand onto your Active Luxray GL, you may switch the Defending Pokémon with 1 of your opponent's Benched Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Flash Impact"
		},

		effect: {
			en: "Does 30 damage to 1 of your Pokémon, and don't apply Weakness and Resistance to this damage."
		},

		damage: 60,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	retreat: 0,
	suffix: "SP"
}

export default card
