import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-18",
	localId: 18,

	// Card informations
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/18/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/18/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/18/high",
		},
	},

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Calming Wind",
			fr: "Vent apaisant",
		},
		text: {
			en: "Remove all Special Conditions from Dragonite.",
			fr: "Retirez tous les États Spéciaux à Dracolosse.",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Stamp",
			fr: "Dragofrappe",
		},
		text: {
			en: "Flip 2 coins. If both of them are tails, this attack does nothing. If both of them are heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez 2 pièces. Si vous obtenez deux fois un côté pile, cette attaque ne fait rien. Si vous obtenez deux fois face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
