import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-185",
	localId: 185,

	// Card informations
	name: {
		en: "Ampharos-GX",
		fr: "Pharamp-GX",
	},

	hp: 240,

	type: [
		Type.LIGHTNING,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/185/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/185/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/185/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/185/high",
		},
	},

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Power Recharge",
			fr: "Recharge Puissance",
		},
		text: {
			en: "Put all Electropower cards from your discard pile into your hand.",
			fr: "Placez toutes les cartes Électropuissance de votre pile de défausse dans votre main.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Impact Bolt",
			fr: "Frappe Éclair",
		},
		text: {
			en: "Discard all Lightning Energy from this Pokémon.",
			fr: "Défaussez toute l’Énergie Lightning de ce Pokémon.",
		},
		damage: 150
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Electrical-GX",
			fr: "Électricité-GX",
		},
		text: {
			en: "Search your deck for up to 7 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Cherchez jusqu’à 7 Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
