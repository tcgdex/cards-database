import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-101",
	localId: 101,

	// Card informations
	name: {
		en: "Snorlax",
		fr: "Ronflex",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 143,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/101/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/101/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 523,
		type: AbilityType.TALENT,
		name: {
			en: "Block",
			fr: "Barrage",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent's Active Pokémon can't retreat.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, le Pokémon Actif de votre adversaire ne peut pas battre en retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Teampact",
			fr: "Teampact",
		},
		text: {
			en: "Does 30 damage times the number of Team Plasma Pokémon you have in play.",
			fr: "Inflige 30 dégâts multipliés par le nombre de Pokémon de la Team Plasma que vous avez en jeu.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
