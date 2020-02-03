import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM97",
	localId: "SM97",

	// Card informations
	name: {
		en: "Gumshoos",
		fr: "Argouste",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 735,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM97/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM97/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM97/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM97/high.png",
		},
	},

	evolveFrom: {
		en: "Yungoos",
		fr: "Manglouton",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Identify",
			fr: "Identifier",
		},
		text: {
			en: "Your opponent reveals their hand. If you find a Pokémon there, this attack does 80 more damage.",
			fr: "Votre adversaire dévoile sa main. Si vous y trouvez un Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Whap Down",
			fr: "Assommer",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card

