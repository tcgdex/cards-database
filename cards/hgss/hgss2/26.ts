import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-26",
	localId: 26,

	// Card informations
	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
	},

	hp: 140,

	type: [
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/26/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/26/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/26/high",
		},
	},

	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Crush",
			fr: "Destruqueue",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
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
			en: "Hyper Beam",
			fr: "Ultralaser",
		},
		text: {
			en: "Discard an Energy card attached to the Defending Pokémon.",
			fr: "Défaussez une carte Énergie attachée au Pokémon Défenseur.",
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
