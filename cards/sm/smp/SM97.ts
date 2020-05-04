import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/smp/SM97/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM97/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM97/high",
		},
	},

	evolveFrom: {
		en: "Yungoos",
		fr: "Manglouton",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "nagimiso",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
