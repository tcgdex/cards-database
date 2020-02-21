import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-81",
	localId: 81,

	// Card informations
	name: {
		en: "Conkeldurr",
		fr: "Bétochef",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 534,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/81/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/81/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/81/high",
		},
	},

	evolveFrom: {
		en: "Gurdurr",
		fr: "Ouvrifier",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Facade",
			fr: "Façade",
		},
		text: {
			en: "If this Pokémon is Burned or Poisoned, this attack does 60 more damage.",
			fr: "Si ce Pokémon est Brûlé ou Empoisonné, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drain Punch",
			fr: "Vampipoing",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
