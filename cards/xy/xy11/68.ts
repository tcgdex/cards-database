import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy11/68/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/68/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/68/high",
		},
	},

	evolveFrom: {
		en: "Steelix-EX",
		fr: "Steelix-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



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
