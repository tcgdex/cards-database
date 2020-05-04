import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-49",
	localId: 49,

	// Card informations
	name: {
		en: "Aegislash",
		fr: "Exagide",
	},

	hp: 150,

	type: [
		Type.PSYCHIC,
	],

	dexId: 681,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/49/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/49/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/49/high",
		},
	},

	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Anesaki Dynamic",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ticking Knock Out",
			fr: "K.O. Imminent",
		},
		text: {
			en: "During your next turn, if the Defending Pokémon is damaged by an attack, it will be Knocked Out.",
			fr: "Pendant votre prochain tour, si le Pokémon Défenseur subit les dégâts d’une attaque, il sera mis K.O.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Draining Blade",
			fr: "Lame Siphon",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 90
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

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
