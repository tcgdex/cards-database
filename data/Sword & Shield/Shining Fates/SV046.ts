import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Galvagla",
		en: "Arctozolt"
	},

	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Fossile Rare",
		en: "Rare Fossil"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Siphon Cinglant",
			en: "Biting Whirlpool"
		},

		effect: {
			fr: "Chaque fois que votre adversaire attache une carte Énergie de sa main à l’un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
			en: "Whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Boule Élek",
			en: "Electro Ball"
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