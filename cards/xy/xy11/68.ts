import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-68",
	localId: 68,

	// Card informations
	name: {
		en: "M Steelix-EX",
		fr: "M-Steelix-EX",
	},

	hp: 240,

	type: [
		Type.METAL,
		Type.FIGHTING,
	],

	dexId: 208,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/68/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/68/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/68/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/68/high.png",
		},
	},

	evolveFrom: {
		en: "Steelix-EX",
		fr: "Steelix-EX",
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
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Canyon Axe",
			fr: "Tranche Canyon",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

