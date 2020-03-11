import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-82",
	localId: 82,

	// Card informations
	name: {
		en: "Alolan Raticate",
		fr: "Rattatac d’Alola",
	},

	hp: 120,

	type: [
		Type.DARKNESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/82/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/82/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/82/high",
		},
	},

	evolveFrom: {
		en: "Alolan Rattata",
		fr: "Rattata d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		name: {
			en: "Enhanced Fang",
			fr: "Croc Amélioré",
		},
		text: {
			en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 50 more damage.",
			fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Hyper Fang",
			fr: "Croc de Mort",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
