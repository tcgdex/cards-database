import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-10",
	localId: 10,

	// Card informations
	name: {
		en: "Mismagius GL",
		fr: "Magirêve  Niv. 26",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 429,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/10/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/10/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/10/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psychic Removal",
			fr: "Psycho-suppression",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon.",
			fr: "Lancez 2 pièces. Si ce sont 2 faces, défaussez toute l'Énergie attachée au Pokémon Défenseur.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Grudge",
			fr: "Rancune",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Prize card your opponent has taken.",
			fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récolté.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

