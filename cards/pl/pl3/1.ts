import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-1",
	localId: 1,

	// Card informations
	name: {
		en: "Absol G",
		fr: "Absol ",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 359,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/1/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/1/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: {
		id: 123,
		name: "Yusuke Ishikawa"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Feint Attack",
			fr: "Feinte",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Doom News",
			fr: "Nouvelles sinistres",
		},
		text: {
			en: "Return all Energy cards attached to Absol G to your hand. The Defending Pokémon is Knocked Out at the end of your opponent's next turn.",
			fr: "Reprenez dans votre main toutes les cartes attachées à Absol . Le Pokémon Défenseur est mis K.O. à la fin du prochain tour de votre adversaire.",
		},
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
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
