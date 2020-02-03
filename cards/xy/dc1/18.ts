import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-18",
	localId: 18,

	// Card informations
	name: {
		en: "Team Aqua's Mightyena",
		fr: "Grahyèna de la Team Aqua",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 262,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/18/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/18/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/18/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/18/high.png",
		},
	},

	evolveFrom: {
		en: "Team Aqua's Poochyena",
		fr: "Medhyèna de la Team Aqua",
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
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Teampact",
			fr: "Teampact",
		},
		text: {
			en: "Flip a coin for each Team Aqua Pokémon you have in play. This attack does 30 damage times the number of heads.",
			fr: "Lancez une pièce pour chaque Pokémon de la Team Aqua que vous avez en jeu. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
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

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card

