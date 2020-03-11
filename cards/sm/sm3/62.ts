import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-62",
	localId: 62,

	// Card informations
	name: {
		en: "Palossand",
		fr: "Trépassable",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 770,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/62/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/62/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/62/high",
		},
	},

	evolveFrom: {
		en: "Sandygast",
		fr: "Bacabouh",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sand Tomb",
			fr: "Tourbi-Sable",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 80
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dust Storm",
			fr: "Tempête de Poussière",
		},
		text: {
			en: "Discard all cards from both Active Pokémon.",
			fr: "Défaussez toutes les cartes attachées aux deux Pokémon Actifs.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
