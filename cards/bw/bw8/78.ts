import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-78",
	localId: 78,

	// Card informations
	name: {
		en: "Lucario",
		fr: "Lucario",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/78/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/78/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/78/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/78/high.png",
		},
	},

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 77,
		name: "Satoshi Shirai"
	},

	abilities: [{
		id: 230,
		type: AbilityType.TALENT,
		name: {
			en: "Dual Armor",
			fr: "Double Armure",
		},
		text: {
			en: "If this Pokémon has any { Metal } Energy attached to it, this Pokémon's type is both { Fighting } and { Metal }.",
			fr: "Si de l'Énergie Metal est attachée à ce Pokémon, le type de ce Pokémon est Fighting et Metal.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hurricane Kick",
			fr: "Pied Ouragan",
		},
		text: {
			en: "Does 30 more damage for each Prize card your opponent has taken.",
			fr: "Inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card

