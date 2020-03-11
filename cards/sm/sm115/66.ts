import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-66",
	localId: 66,

	// Card informations
	name: {
		en: "Moltres & Zapdos & Articuno-GX",
		fr: "Sulfura, Électhor et Artikodin-GX",
	},

	hp: 300,

	type: [
		Type.COLORLESS,
	],

	dexId: 144,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/66/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/66/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Trinity Burn",
			fr: "Règle des ESCOUADES",
		},
		damage: 210
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sky Legends-GX",
			fr: "Triple Brûlure",
		},
		text: {
			en: "Shuffle this Pokémon and all cards attached to it into your deck. If this Pokémon has at least 1 extra Fire, Water, and Lightning Energy attached to it (in addition to this attack's cost), this attack does 110 damage to 3 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
		},
		damage: 210
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Légendes Célestes-GX",
		},
		text: {
			fr: "Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck. Si au moins une Énergie Fire, Water et Lightning supplémentaire sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 110 dégâts à 3 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
