import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-85",
	localId: 85,

	// Card informations
	name: {
		en: "M Audino-EX",
		fr: "M-Nanméouïe-EXEX",
	},

	hp: 220,

	type: [
		Type.COLORLESS,
	],

	dexId: 531,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/85/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/85/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/85/high",
		},
	},

	evolveFrom: {
		en: "Audino-EX",
		fr: "Nanméouïe-exEX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magical Symphony",
			fr: "Symphonie Magique",
		},
		text: {
			en: "If you played a Supporter card from your hand during this turn, this attack does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 50 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
