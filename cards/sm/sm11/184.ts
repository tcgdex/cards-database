import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-184",
	localId: 184,

	// Card informations
	name: {
		en: "Silvally",
		fr: "Silvallié",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 773,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/184/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/184/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/184/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/184/high",
		},
	},

	evolveFrom: {
		en: "Type: Null",
		fr: "Type:0",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Avenging Heart",
			fr: "Cœur Vengeur",
		},
		text: {
			en: "This attack does 50 more damage for each Prize card your opponent took on their last turn.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée lors de son dernier tour.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Air Slash",
			fr: "Lame d’Air",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
