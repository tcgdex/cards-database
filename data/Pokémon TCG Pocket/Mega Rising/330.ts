import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Klefki"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Crown",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "In the past, noble families entrusted their vault\nkeys to a Klefki. They passed the Klefki down\nthrough the generations, taking good care of it."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dismantling Keys"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is on your Bench, you may discard all Pokémon Tools from your opponent's Active Pokémon. If you do, discard this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Hook"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card