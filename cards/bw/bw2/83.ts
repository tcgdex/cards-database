import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-83",
	localId: 83,

	// Card informations
	name: {
		en: "Audino",
		fr: "Nanméouïe",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 531,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/83/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/83/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Powerful Slap",
			fr: "Grosse Baffe",
		},
		text: {
			en: "Flip a coin for each Energy attached to this Pokémon. This attack does 40 damage times the number of heads.",
			fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heal Pulse",
			fr: "Vibra Soin",
		},
		text: {
			en: "Heal 50 damage from 1 of your Pokémon.",
			fr: "Soignez 50 dégâts à 1 de vos Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
