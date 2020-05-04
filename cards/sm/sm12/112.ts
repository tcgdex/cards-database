import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-112",
	localId: 112,

	// Card informations
	name: {
		en: "Armaldo",
		fr: "Armaldo",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 348,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/112/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/112/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/112/high",
		},
	},

	evolveFrom: {
		en: "Anorith",
		fr: "Anorith",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ancient Blast",
			fr: "Explosion Ancestrale",
		},
		text: {
			en: "This attack does 50 more damage for each Unidentified Fossil card in your discard pile.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Fossile Inconnu dans votre pile de défausse.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mach Claw",
			fr: "Instagriffe",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
