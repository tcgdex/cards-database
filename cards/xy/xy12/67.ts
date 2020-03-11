import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-67",
	localId: 67,

	// Card informations
	name: {
		en: "Raticate",
		fr: "Rattatac",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/67/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/67/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/67/high",
		},
	},

	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		text: {
			en: "Discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Shadowy Bite",
			fr: "Morsure d’Ombre",
		},
		text: {
			en: "This attack does 60 damage times the number of Special Energy cards in your opponent's discard pile.",
			fr: "Cette attaque inflige 60 dégâts multipliés par le nombre de cartes Énergie spéciale dans la pile de défausse de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
