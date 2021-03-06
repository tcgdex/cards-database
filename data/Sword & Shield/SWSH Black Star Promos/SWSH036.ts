import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Arctozolt",
		fr: "Galvagla"
	},

	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		en: "Rare Fossil",
		fr: "Fossile Rare"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Biting Whirlpool",
			fr: "Siphon Cinglant"
		},

		effect: {
			en: "Whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon.",
			fr: "Chaque fois que votre adversaire attache une carte Énergie de sa main à l’un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là."
		}
	}],

	attacks: [{
		name: {
			en: "Electro Ball",
			fr: "Boule Élek"
		},

		damage: 70,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card