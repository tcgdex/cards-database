import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-61",
	localId: 61,

	// Card informations
	name: {
		en: "Escavalier",
		fr: "Lançargot",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 589,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/61/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/61/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/61/high",
		},
	},

	evolveFrom: {
		en: "Karrablast",
		fr: "Carabing",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Steamroll",
			fr: "Rouleau Compresseur",
		},
		text: {
			en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 40
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slashing Strike",
			fr: "Coup Déchirant",
		},
		text: {
			en: "This Pokémon can't use Slashing Strike during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
