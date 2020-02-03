import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-23",
	localId: 23,

	// Card informations
	name: {
		en: "Grumpig",
		fr: "Groret",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 326,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/23/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/23/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/23/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/23/high.png",
		},
	},

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Lock",
			fr: "Verrou psy",
		},
		text: {
			en: "Your opponent can't use any Poké-Powers on his or her Pokémon on his or her next turn.",
			fr: "Votre adversaire ne peut utiliser aucun Poké-Power sur ses Pokémon lors de son prochain tour.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bench Manipulation",
			fr: "Manipulation de Banc",
		},
		text: {
			en: "Your opponent flips a coin for each of his or her Benched Pokémon. This attack does 40 damage times the number of tails. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Votre adversaire lance une pièce pour chacun de ses Pokémon de Banc. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés pile. Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
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
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

