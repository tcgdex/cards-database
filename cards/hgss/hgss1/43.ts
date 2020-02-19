import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-43",
	localId: 43,

	// Card informations
	name: {
		en: "Heracross",
		fr: "Scarhino",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 214,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/43/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/43/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/43/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/43/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 12,
		name: "Sachiko Adachi"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Green Draw",
			fr: "Pioche verte",
		},
		text: {
			en: "Draw a card for each of your Grass Pokémon in play.",
			fr: "Piochez une carte pour chacun de vos Pokémon Grass en jeu.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Headbutt",
			fr: "Double coup d’boule",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card

