import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-60",
	localId: 60,

	// Card informations
	name: {
		en: "Goodra",
		fr: "Muplodocus",
	},

	hp: 150,

	type: [
		Type.DRAGON,
	],

	dexId: 706,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/60/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/60/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/60/high",
		},
	},

	evolveFrom: {
		en: "Sliggoo",
		fr: "Colimucus",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Saya Tsuruta",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Liquid Blow",
			fr: "Coup Liquide",
		},
		text: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon for each Colorless in its Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire pour chaque Colorless dans son Coût de Retraite. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shining Breath",
			fr: "Souffle Étincelant",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon can't be affected by any Special Conditions.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon ne peut être affecté par aucun État Spécial.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
