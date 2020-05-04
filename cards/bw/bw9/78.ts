import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-78",
	localId: 78,

	// Card informations
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
	},

	hp: 150,

	type: [
		Type.DARKNESS,
	],

	dexId: 635,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/78/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/78/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/78/high",
		},
	},

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tractorbeam",
			fr: "Rayon Inversion",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. This attack does 40 damage to the new Defending Pokémon.",
			fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec le Pokémon Défenseur. Cette attaque inflige 40 dégâts au nouveau Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Obsidian Fang",
			fr: "Croc d'Obsidienne",
		},
		text: {
			en: "Before doing damage, discard all Pokémon Tool cards attached to the Defending Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez toutes les cartes Outil Pokémon attachées au Pokémon Défenseur.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
