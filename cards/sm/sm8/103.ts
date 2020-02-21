import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-103",
	localId: 103,

	// Card informations
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
	},

	hp: 140,

	type: [
		Type.PSYCHIC,
	],

	dexId: 609,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/103/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/103/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/103/high",
		},
	},

	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 143,
		name: "so-taro"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Cursed Drop",
			fr: "Chute Maudite",
		},
		text: {
			en: "Put 4 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Vortex of Pain",
			fr: "Vortex Douloureux",
		},
		text: {
			en: "This attack does 20 damage for each damage counter on all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé sur les Pokémon de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
