import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-36",
	localId: 36,

	// Card informations
	name: {
		en: "Magnezone",
		fr: "Magnézone",
	},

	hp: 150,

	type: [
		Type.LIGHTNING,
	],

	dexId: 462,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/36/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/36/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/36/high",
		},
	},

	evolveFrom: {
		en: "Magneton",
		fr: "Magnéton",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Yoshinobu Saito",

	abilities: [{
		id: 1161,
		type: AbilityType.TALENT,
		name: {
			en: "Magnetic Circuit",
			fr: "Circuit Magnétique",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may attach a Lightning Energy card from your hand to 1 of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Lightning de votre main à l’un de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Zap Cannon",
			fr: "Élecanon",
		},
		text: {
			en: "This Pokémon can't use Zap Cannon during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
