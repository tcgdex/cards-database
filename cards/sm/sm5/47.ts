import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-47",
	localId: 47,

	// Card informations
	name: {
		en: "Luxio",
		fr: "Luxio",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 404,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/47/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/47/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/47/high",
		},
	},

	evolveFrom: {
		en: "Shinx",
		fr: "Lixy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "tetsuya koizumi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Disconnect",
			fr: "Déconnexion",
		},
		text: {
			en: "Your opponent can't play any Item cards from their hand during their next turn.",
			fr: "Votre adversaire ne peut pas jouer de carte Objet de sa main pendant son prochain tour.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
