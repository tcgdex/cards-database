import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-7",
	localId: 7,

	// Card informations
	name: {
		en: "Trevenant",
		fr: "Desséliande",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 709,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/7/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/7/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/7/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/7/high.png",
		},
	},

	evolveFrom: {
		en: "Phantump",
		fr: "Brocélôme",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 188,
		name: "Hiroyuki Yamamoto"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poltergeist",
			fr: "Poltergeist",
		},
		text: {
			en: "Your opponent reveals their hand. This attack does 30 damage for each Trainer card you find there.",
			fr: "Votre adversaire dévoile sa main. Cette attaque inflige 30 dégâts pour chaque carte Dresseur que vous y trouvez.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Leech",
			fr: "Encornebois",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

