import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-51",
	localId: 51,

	// Card informations
	name: {
		en: "Garbodor",
		fr: "Miasmax",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 569,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/51/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/51/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/51/high",
		},
	},

	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Trashalanche",
			fr: "Avalanche de Déchets",
		},
		text: {
			en: "This attack does 20 damage for each Item card in your opponent's discard pile.",
			fr: "Cette attaque inflige 20 dégâts pour chaque carte Objet dans la pile de défausse de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Acid Spray",
			fr: "Bombe Acide",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
