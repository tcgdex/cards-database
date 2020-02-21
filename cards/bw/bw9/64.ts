import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-64",
	localId: 64,

	// Card informations
	name: {
		en: "Umbreon",
		fr: "Noctali",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 197,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/64/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/64/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/64/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1013,
		type: AbilityType.TALENT,
		name: {
			en: "Dark Shade",
			fr: "Ombre Ténébreuse",
		},
		text: {
			en: "Each of your Team Plasma Pokémon in play gets +20 HP.",
			fr: "Ajoute 20 PV à chacun de vos Pokémon de la Team Plasma en jeu.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
