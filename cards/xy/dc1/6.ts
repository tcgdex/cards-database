import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Team Aqua's Kyogre-ex",
		fr: "Kyogre-EX de la Team Aqua",
	},

	hp: 190,

	type: [
		Type.WATER,
	],

	dexId: 382,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/6/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/6/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/6/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/6/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},

	abilities: [{
		id: 56,
		type: AbilityType.TALENT,
		name: {
			en: "Power Saver",
			fr: "Économie de Puissance",
		},
		text: {
			en: "If there are 4 or fewer Team Aqua Pokémon in play, this Pokémon can't attack.",
			fr: "S'il y a 4 Pokémon de la Team Aqua en jeu ou moins, ce Pokémon ne peut pas attaquer.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Impact",
			fr: "Impact Aqua",
		},
		text: {
			en: "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card

