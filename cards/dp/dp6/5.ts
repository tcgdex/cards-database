import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-5",
	localId: 5,

	// Card informations
	name: {
		en: "Gliscor",
		fr: "Scorvol",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 472,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/5/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/5/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/5/high",
		},
	},

	evolveFrom: {
		en: "Gligar",
		fr: "Skorgla",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kent Kanetsuna",



	attacks: [{
		name: {
			en: "Burning Poison",
			fr: "Poison brûlant",
		},
		text: {
			en: "Choose either Burned or Poisoned. The Defending Pokémon is now affected by that Special Condition. You may return Gliscor and all cards attached to it to your hand.",
			fr: "Choisissez entre Brûlé et Empoisonné. Le Pokémon Défenseur est maintenant affecté par cet État Spécial. Vous pouvez reprendre Scorvol dans votre main ainsi que toutes les cartes qui lui sont attachées.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Pester",
			fr: "Abattre",
		},
		text: {
			en: "If the Defending Pokémon is affected by a Special Condition, this attack does 40 damage plus 40 more damage.",
			fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 40 dégâts plus 40 dégât supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
