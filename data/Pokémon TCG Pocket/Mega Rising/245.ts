import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Hydreigon",
		fr: "Trioxhydre"
	},

	illustrator: "matazo",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [635],
	hp: 150,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat"
	},

	description: {
		en: "It's said that Hydreigon grew ferocious because\npeople in times long past loathed it, considering\nit to be evil incarnate and attacking it relentlessly."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Roar in Unison",
			fr: "Cri à l'Unisson"
		},

		effect: {
			en: "Once during your turn, you may take 2 {D} Energy from your Energy Zone and attach it to this Pokémon. If you do, do 30 damage to this Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez prendre 2 Énergies {D} de votre zone Énergie et les attacher à ce Pokémon. Dans ce cas, infligez 30 dégâts à ce Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Hyper Ray",
			fr: "Hyper Rayon"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon."
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