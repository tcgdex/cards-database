import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-93",
	localId: 93,

	// Card informations
	name: {
		en: "Ribombee",
		fr: "Rubombelle",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 743,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/93/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/93/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/93/high",
		},
	},

	evolveFrom: {
		en: "Cutiefly",
		fr: "Bombydou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 1220,
		type: AbilityType.TALENT,
		name: {
			en: "Curative Pollen",
			fr: "Pollen Curatif",
		},
		text: {
			en: "Once during your turn (before your attack), you may heal 20 damage from 1 of your Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à l’un de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
