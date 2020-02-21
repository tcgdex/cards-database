import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-13",
	localId: 13,

	// Card informations
	name: {
		en: "Roserade",
		fr: "Roserade",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 407,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/13/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/13/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/13/high",
		},
	},

	evolveFrom: {
		en: "Roselia",
		fr: "Roselia",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 16,
		name: "Nakaoka"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-venin",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Spike Whip",
			fr: "Fouet à clou",
		},
		text: {
			en: "If Budew is anywhere under Roserade, choose 1 of your opponent's Benched Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si Rozbouton se trouve sous Roserade, choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
