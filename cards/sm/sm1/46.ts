import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-46",
	localId: 46,

	// Card informations
	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 752,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/46/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/46/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/46/high",
		},
	},

	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 28,
		name: "match"
	},

	abilities: [{
		id: 492,
		type: AbilityType.TALENT,
		name: {
			en: "Water Bubble",
			fr: "Aquabulle",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Fire Pokémon.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Fire de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Edge",
			fr: "Aqua-Dague",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
