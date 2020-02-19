import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-18",
	localId: 18,

	// Card informations
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/18/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/18/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/18/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/18/high.png",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Absorption",
			fr: "Absorption d’énergie",
		},
		text: {
			en: "Search your discard pile for up to 2 Energy cards and attach them to Exeggutor.",
			fr: "Cherchez dans votre pile de défausse jusqu’à deux cartes Énergie et attachez-les à Noadkoko.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Big Eggsplosion",
			fr: "Grosse éclate",
		},
		text: {
			en: "Flip a coin for each Energy attached to Exeggutor. This attack does 40 damage times the number of heads.",
			fr: "Lancez une pièce pour chaque carte Énergie attachée à Noadkoko. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card

