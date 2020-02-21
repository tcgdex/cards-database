import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-14",
	localId: 14,

	// Card informations
	name: {
		en: "Jumpluff",
		fr: "Cotovol",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 189,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/14/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/14/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/14/high",
		},
	},

	evolveFrom: {
		en: "Skiploom",
		fr: "Floravol",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Lost March",
			fr: "Marche Perdue",
		},
		text: {
			en: "This attack does 20 damage for each of your Pokémon, except ◇ (Prism Star) Pokémon, in the Lost Zone.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon dans la Zone Perdue, à l’exception des Pokémon  (Prisme Étoile).",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
