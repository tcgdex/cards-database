import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-124",
	localId: 124,

	// Card informations
	name: {
		en: "Forretress",
		fr: "Foretress",
	},

	hp: 110,

	type: [
		Type.METAL,
	],

	dexId: 205,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/124/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/124/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/124/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/124/high",
		},
	},

	evolveFrom: {
		en: "Pineco",
		fr: "Pomdepik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "tetsuya koizumi",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Thorny Eruption",
			fr: "Éruption Épineuse",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage for each heads to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Lost Blast",
			fr: "Explosion Perdue",
		},
		text: {
			en: "Put this Pokémon and all cards attached to it in the Lost Zone.",
			fr: "Placez ce Pokémon et toutes les cartes qui lui sont attachées dans la Zone Perdue.",
		},
		damage: 190
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

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
