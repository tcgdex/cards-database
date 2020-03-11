import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-30",
	localId: 30,

	// Card informations
	name: {
		en: "Electivire",
		fr: "Élekable",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 466,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/30/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/30/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/30/high",
		},
	},

	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "PLANETA",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Tag Team Spark",
			fr: "Étincelle Groupée",
		},
		text: {
			en: "This attack does 20 more damage for each Energy attached to your Magmortar.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à vos Maganon.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gigavolt",
			fr: "Gigavolt",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage. If tails, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
