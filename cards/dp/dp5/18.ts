import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-18",
	localId: 18,

	// Card informations
	name: {
		en: "Espeon",
		fr: "Mentali",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 196,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/18/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/18/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/18/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",

	abilities: [{
		id: 458,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sunlight Veil",
			fr: "Voile solaire",
		},
		text: {
			en: "Each of your Pokémon that evolves from Eevee gets +20 HP. You can't use more than 1 Sunlight Veil Poké-Body each turn.",
			fr: "Chacun de vos Pokémon évoluant d'Evoli obtient 20 PV de plus. Vous ne pouvez pas utiliser plus d'1 Poké-Body Voile solaire par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Morning Sun",
			fr: "Aurore",
		},
		text: {
			en: "You may move an Energy card attached to Espeon to 1 of your Benched Pokémon.",
			fr: "Vous pouvez déplacer une carte Énergie attachée à Mentali sur 1 des Pokémon de votre Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
