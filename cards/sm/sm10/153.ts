import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-153",
	localId: 153,

	// Card informations
	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 463,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/153/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/153/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/153/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/153/high",
		},
	},

	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Eat Up",
			fr: "Dévorer",
		},
		text: {
			en: "Before doing damage, discard all Pokémon Tool cards from your opponent's Active Pokémon. If you discarded a Pokémon Tool card in this way, heal all damage from this Pokémon.",
			fr: "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire. Si vous avez défaussé une carte Outil Pokémon de cette façon, soignez tous les dégâts de ce Pokémon.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tonguenado",
			fr: "Déferlante de Langues",
		},
		text: {
			en: "Flip 4 coins. This attack does 60 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
