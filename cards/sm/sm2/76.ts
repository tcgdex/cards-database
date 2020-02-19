import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-76",
	localId: 76,

	// Card informations
	name: {
		en: "Mudsdale",
		fr: "Bourrinos",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 750,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/76/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/76/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/76/high.png",
		},
	},

	evolveFrom: {
		en: "Mudbray",
		fr: "Tiboudet",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Enhanced Stomp",
			fr: "Piétinement Amélioré",
		},
		text: {
			en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 60 more damage.",
			fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "High Horsepower",
			fr: "Cavalerie Lourde",
		},
		text: {
			en: "This Pokémon does 40 damage to itself.",
			fr: "Ce Pokémon s’inflige 40 dégâts.",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

