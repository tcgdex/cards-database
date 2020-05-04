import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM40",
	localId: "SM40",

	// Card informations
	name: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 782,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM40/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM40/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM40/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Iron Defense",
			fr: "Mur de Fer",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
