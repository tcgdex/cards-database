import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-37",
	localId: 37,

	// Card informations
	name: {
		en: "Pyroar",
		fr: "Némélios",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 668,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/37/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/37/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/37/high",
		},
	},

	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 182,
		name: "KEIICHIRO ITO"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Swirling Inferno",
			fr: "Torsade Infernale",
		},
		text: {
			en: "Discard all Pokémon Tool cards and Special Energy from each of your opponent's Pokémon.",
			fr: "Défaussez toutes les cartes Outil Pokémon et l’Énergie spéciale de chacun des Pokémon de votre adversaire.",
		},
		damage: 70
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
