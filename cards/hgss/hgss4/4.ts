import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-4",
	localId: 4,

	// Card informations
	name: {
		en: "Drapion",
		fr: "Drascore",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 452,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/4/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/4/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/4/high",
		},
	},

	evolveFrom: {
		en: "Skorupi",
		fr: "Rapion",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Toxic Fang",
			fr: "Croc toxik",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'un seul sur ce Pokémon entre deux tours.",
		},
		damage: 40
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Land Crush",
			fr: "Écras'terre",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
