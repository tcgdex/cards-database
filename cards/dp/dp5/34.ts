import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-34",
	localId: 34,

	// Card informations
	name: {
		en: "Vaporeon",
		fr: "Aquali",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 134,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/34/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/34/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/34/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Cleanse Away",
			fr: "Grand nettoyage",
		},
		text: {
			en: "Remove 2 damage counters from each of your Benched Pokémon.",
			fr: "Retirez 2 marqueurs de dégât à chacun de vos Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Whirlpool",
			fr: "Hyper tourbillon",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, discard an Energy card attached to the Defending Pokémon.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
