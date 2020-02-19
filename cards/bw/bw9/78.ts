import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw9/78/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/78/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/78/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/78/high.png",
		},
	},

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



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

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card

