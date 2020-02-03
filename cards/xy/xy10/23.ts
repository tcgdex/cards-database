import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-23",
	localId: 23,

	// Card informations
	name: {
		en: "Barbaracle",
		fr: "Golgopathe",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 689,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/23/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/23/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/23/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/23/high.png",
		},
	},

	evolveFrom: {
		en: "Binacle",
		fr: "Opermine",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 1417,
		type: AbilityType.TALENT,
		name: {
			en: "Hand Block",
			fr: "Blocage Manuel",
		},
		text: {
			en: "If you have a Stadium card in play, your opponent can't attach any Special Energy cards from his or her hand to his or her Pokémon.",
			fr: "Si vous avez une carte Stade en jeu, votre adversaire ne peut pas attacher de carte Énergie spéciale de sa main à ses Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

