import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-24",
	localId: 24,

	// Card informations
	name: {
		en: "Kricketune",
		fr: "Mélokrik",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 402,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/24/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/24/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/24/high",
		},
	},

	evolveFrom: {
		en: "Kricketot",
		fr: "Crikzik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Entrancing Melody",
			fr: "Mélodie envoûtante",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Cutter",
			fr: "Taillade",
		},
		text: {
			en: "Flip 3 coins. If 1 of them is heads, this attack does 20 damage plus 20 more damage. If 2 of them are heads, this attack does 20 damage plus 40 more damage. If all of them are heads, this attack does 20 damage plus 100 more damage.",
			fr: "Lancez 3 pièces. Si vous obtenez une fois un côté face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires. Si vous obtenez deux fois un côté face, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires. Si vous obtenez chaque fois un côté face, cette attaque inflige 20 dégâts plus 100 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
