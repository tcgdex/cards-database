import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-51",
	localId: 51,

	// Card informations
	name: {
		en: "Boldore",
		fr: "Géolithe",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 525,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/51/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/51/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/51/high",
		},
	},

	evolveFrom: {
		en: "Roggenrola",
		fr: "Nodulithe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Smack Down",
			fr: "Anti-Air",
		},
		text: {
			en: "If the Defending Pokémon has Fighting Resistance, this attack does 60 more damage.",
			fr: "Si le Pokémon Défenseur a une Résistance à Fighting, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Gem",
			fr: "Rayon Gemme",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
