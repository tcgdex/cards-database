import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-85",
	localId: 85,

	// Card informations
	name: {
		en: "Crustle",
		fr: "Crabaraque",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 558,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/85/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/85/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/85/high.png",
		},
	},

	evolveFrom: {
		en: "Dwebble",
		fr: "Crabicoque",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 1087,
		type: AbilityType.TALENT,
		name: {
			en: "Sturdy",
			fr: "Fermeté",
		},
		text: {
			en: "If this Pokémon has full HP and would be Knocked Out by damage from an attack, this Pokémon is not Knocked Out and its remaining HP becomes 10 instead.",
			fr: "Si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d'une attaque, ce Pokémon n'est pas mis K.O. mais il ne lui reste que 10 PV.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Stone Edge",
			fr: "Lame de Roc",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

