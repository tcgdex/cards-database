import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-31",
	localId: 31,

	// Card informations
	name: {
		en: "Wailord",
		fr: "Wailord",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 321,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/31/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/31/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/31/high",
		},
	},

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Underwater Dive",
			fr: "Plongée sous-marine",
		},
		text: {
			en: "Flip 2 coins. For each heads, remove 3 damage counters from Wailord.",
			fr: "Lancez 2 pièces. Pour chaque côté face, retirez 3 marqueurs de dégât à Wailord.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Swallow Up",
			fr: "Engloutir",
		},
		text: {
			en: "Before doing damage, count the remaining HP of the Defending Pokémon and Wailord. If the Defending Pokémon has fewer remaining HP than Wailord, this attack does 50 damage plus 50 more damage.",
			fr: "Avant d'infliger des dégâts, comptez les PV restant au Pokémon Défenseur et à Wailord. S'il reste moins de PV au Pokémon Défenseur qu'à Wailord, cette attaque inflige 50 dégâts plus 50 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
