import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-95",
	localId: 95,

	// Card informations
	name: {
		en: "Suicune & Entei LEGEND",
		fr: "Suicune & Entei LÉGENDE (bas)",
	},

	hp: 160,

	type: [
		Type.WATER,
		Type.FIRE,
	],

	dexId: 244,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/95/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/95/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],





	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Torrent Blade",
			fr: "Croc torrentiel",
		},
		text: {
			en: "Return 2 Water Energy attached to Suicune & Entei LEGEND to your hand. Choose one of your opponent's Benched Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Reprenez dans votre main 2 cartes Énergie Water attachées à Suicune & Entei LÉGENDE. Cette attaque inflige 100 dégâts à l'un des Pokémon se trouvant sur le Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bursting Inferno",
			fr: "Enfer explosif",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	},{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
