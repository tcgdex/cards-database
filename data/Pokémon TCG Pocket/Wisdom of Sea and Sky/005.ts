import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Tangrowth",
		fr: "Bouldeneu"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Tangela"
	},

	description: {
		en: "Tangrowth has two arms that it can extend as it\npleases. Recent research has shown that these\narms are, in fact, bundles of vines.",
		fr: "La science a récemment découvert que les deux bras qu'il peut allonger à volonté sont en fait des lianes entrelacées."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Grass Knot",
			fr: "Nœud Herbe"
		},

		damage: 10,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "This attack does 40 more damage for each Energy in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie dans le Coût de Retraite du Pokémon Actif de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["ho-oh"]
}

export default card