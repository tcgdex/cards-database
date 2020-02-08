import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-64",
	localId: 64,

	// Card informations
	name: {
		en: "Frosmoth",
		fr: "Beldeneige",
	},

	hp: 90,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/64/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/64/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/64/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/64/high.png",
		},
	},

	evolveFrom: {
		en: "Snom",
		fr: "Frissonille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 13,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Ice Dance",
			fr: "Danse de Glace",
		},
		text: {
			en: "As often as you like during your turn, you may attach a Water Energy card from your hand to 1 of your Benched Water Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Water de votre main à l’un de vos Pokémon Water de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
