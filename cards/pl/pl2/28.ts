import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-28",
	localId: 28,

	// Card informations
	name: {
		en: "Mr. Mime 4",
		fr: "M. Mime  Niv. 53",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 122,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/28/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/28/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		name: {
			en: "Magic Heal",
			fr: "Guérison magique",
		},
		text: {
			en: "Flip 3 coins. Remove a number of damage counters equal to the number of heads from your Pokémon in any way you like.",
			fr: "Lancez 3 pièces. Retirez à vos Pokémon autant de marqueurs de dégât que vous otenez de faces de la façon que vous voulez.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Barrier Attack",
			fr: "Attaque d'obstacle",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Mr.Mime by attacks is reduced by 10 (after applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à M. Mime  par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
