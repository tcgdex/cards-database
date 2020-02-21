import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-53",
	localId: 53,

	// Card informations
	name: {
		en: "Togedemaru",
		fr: "Togedemaru",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 777,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/53/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/53/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Defense Curl",
			fr: "Boul'Armure",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Discharge",
			fr: "Coup d'Jus",
		},
		text: {
			en: "Discard all Lightning Energy from this Pokémon. This attack does 30 damage for each card you discarded in this way.",
			fr: "Défaussez toutes les Énergies Lightning de ce Pokémon. Cette attaque inflige 30 dégâts pour chaque carte défaussée de cette façon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
