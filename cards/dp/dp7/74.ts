import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-74",
	localId: 74,

	// Card informations
	name: {
		en: "Snover",
		fr: "Snover",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 459,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/74/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/74/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/74/high",
		},
	},

	evolveFrom: {
		fr: "Blizzi",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hide",
			fr: "Cachette",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Snover during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Blizzi lors du prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Powder Snow",
			fr: "Poudreuse",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
