import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-79",
	localId: 79,

	// Card informations
	name: {
		en: "Claydol",
		fr: "Kaorine",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 344,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/79/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/79/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/79/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/79/high.png",
		},
	},

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 58,
		name: "Yumi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Psy Bolt",
			fr: "Choc Mental",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Miraculous Spin",
			fr: "Tournoiement Miraculeux",
		},
		text: {
			en: "This attack does 40 damage for each Steven's Resolve card in your discard pile.",
			fr: "Cette attaque inflige 40 dégâts pour chaque carte Résolution de Pierre dans votre pile de défausse.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

