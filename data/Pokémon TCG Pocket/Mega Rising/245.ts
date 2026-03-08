import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Hydreigon"
	},

	illustrator: "matazo",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [635],
	hp: 150,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zweilous"
	},

	description: {
		en: "It's said that Hydreigon grew ferocious because\npeople in times long past loathed it, considering\nit to be evil incarnate and attacking it relentlessly."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Roar in Unison"
		},

		effect: {
			en: "Once during your turn, you may take 2 {D} Energy from your Energy Zone and attach it to this Pokémon. If you do, do 30 damage to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Hyper Ray"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			en: "Discard all Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card