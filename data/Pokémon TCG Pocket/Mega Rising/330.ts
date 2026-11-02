import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Klefki",
		fr: "Trousselin"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Crown",
	category: "Pokemon",

	dexId: [707],
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "In the past, noble families entrusted their vault\nkeys to a Klefki. They passed the Klefki down\nthrough the generations, taking good care of it."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dismantling Keys",
			fr: "Clés Séparatrices"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is on your Bench, you may discard all Pokémon Tools from your opponent's Active Pokémon. If you do, discard this Pokémon.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez défausser tous les Outils Pokémon du Pokémon Actif de votre adversaire. Dans ce cas, défaussez ce Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Hook",
			fr: "Crochet"
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