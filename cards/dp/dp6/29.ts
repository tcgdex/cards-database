import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-29",
	localId: 29,

	// Card informations
	name: {
		en: "Groudon",
		fr: "Groudon",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 383,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/29/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/29/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/29/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/29/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 122,
		name: "Kazuaki Aihara"
	},



	attacks: [{
		name: {
			en: "Drought",
			fr: "Sécheresse",
		},
		text: {
			en: "Choose up to 2 basic Fighting Energy cards from your hand and attach them to 1 of your Pokémon.",
			fr: "Choisissez jusqu'à 2 cartes Énergie de base Fighting de votre main et attachez-les à 1 de vos Pokémon.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Major Earthquake",
			fr: "Gros tremblement de terre",
		},
		text: {
			en: "Discard 2 Fighting Energy attached to Groudon and this attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies Fighting attachées à Groudon et cette attaque inflige 10 dégâts à chacun de vos Pokémon de Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

