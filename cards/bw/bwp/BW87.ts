import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW87",
	localId: "BW87",

	// Card informations
	name: {
		en: "Leafeon",
		fr: "Phyllali",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 470,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW87/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW87/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW87/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 160,
		name: "Illus.＆Direc.The Pokémon Company Art Team"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Assist",
			fr: "Assistance Énergétique",
		},
		text: {
			en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
