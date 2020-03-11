import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-33",
	localId: 33,

	// Card informations
	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 463,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/33/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/33/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/33/high",
		},
	},

	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Harrumph",
			fr: "Se racler la gorge",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Before doing damage, discard all Trainer cards attached to that Pokémon.",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Avant d'infliger des dégâts, défaussez toutes les cartes Dresseur attachées à ce Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Body Press",
			fr: "Presse corporelle",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy card attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
