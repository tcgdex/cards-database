import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-51",
	localId: 51,

	// Card informations
	name: {
		en: "Steelix GL",
		fr: "Steelix  Niv. 38",
	},

	hp: 110,

	type: [
		Type.METAL,
	],

	dexId: 208,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/51/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/51/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/51/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/51/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mend",
			fr: "Réparation",
		},
		text: {
			en: "Search your discard pile for a Metal Energy card and attach it to Steelix If you do, remove 1 damage counter from Steelix .",
			fr: "Choisissez dans votre pile de défausse une carte Énergie Metal et attachez-la à Steelix . Retirez alors à Steelix  1 marqueur de dégât.",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Squeeze",
			fr: "Compression",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 50 more damage and the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 50 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

