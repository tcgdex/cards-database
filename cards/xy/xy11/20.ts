import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-20",
	localId: 20,

	// Card informations
	name: {
		en: "Infernape",
		fr: "Simiabraz",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 392,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/20/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/20/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/20/high",
		},
	},

	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Flare Blitz",
			fr: "Boutefeu",
		},
		text: {
			en: "Discard all Fire Energy attached to this Pokémon.",
			fr: "Défaussez toutes les Énergies Fire attachées à ce Pokémon.",
		},
		damage: 120
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Flare Up",
			fr: "Prise de Bec",
		},
		text: {
			en: "If you have fewer than 10 Fire Energy cards in your discard pile, this attack does nothing. Shuffle 10 Fire Energy cards from your discard pile into your deck.",
			fr: "Si vous avez moins de 10 cartes Énergie Fire dans votre pile de défausse, cette attaque ne fait rien. Mélangez 10 cartes Énergie Fire de votre pile de défausse avec votre deck.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
