import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-20",
	localId: 20,

	// Card informations
	name: {
		en: "Bellossom",
		fr: "Joliflor",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 182,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/20/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/20/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/20/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
		fr: "Duflor",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Parallel Gain",
			fr: "Gain parallèle",
		},
		text: {
			en: "Remove 1 damage counter from each of your Pokémon.",
			fr: "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Blend Pollen",
			fr: "Mélange de pollen",
		},
		text: {
			en: "Does 40 damage plus 20 more damage for each Vileplume and each Bellossom you have in play. Flip a coin. If heads, the Defending Pokémon is now Burned.",
			fr: "Inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque Rafflesia et chaque Joliflor que vous avez en jeu. Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
