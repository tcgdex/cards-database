import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-15",
	localId: 15,

	// Card informations
	name: {
		en: "Team Magma's Groudon-ex",
		fr: "Groudon-EX de la Team Magma",
	},

	hp: 190,

	type: [
		Type.FIGHTING,
	],

	dexId: 383,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/15/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/15/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/15/high.png",
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
			en: "If there are 4 or fewer Team Magma Pokémon in play, this Pokémon can't attack.",
			fr: "S'il y a 4 Pokémon de la Team Magma en jeu ou moins, ce Pokémon ne peut pas attaquer.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Magma Quake",
			fr: "Secousse Magma",
		},
		text: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 80 dégâts supplémentaires.",
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

