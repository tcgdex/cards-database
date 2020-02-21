import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-83",
	localId: 83,

	// Card informations
	name: {
		en: "Magnezone",
		fr: "Magnézone",
	},

	hp: 150,

	type: [
		Type.METAL,
	],

	dexId: 462,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/83/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/83/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/83/high",
		},
	},

	evolveFrom: {
		en: "Magneton",
		fr: "Magnéton",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},

	abilities: [{
		id: 1161,
		type: AbilityType.TALENT,
		name: {
			en: "Magnetic Circuit",
			fr: "Circuit Magnétique",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may attach a Metal Energy card from your hand to 1 of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Metal de votre main à l’un de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL,
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
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
