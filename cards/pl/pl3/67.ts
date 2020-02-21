import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-67",
	localId: 67,

	// Card informations
	name: {
		en: "Marshtomp",
		fr: "Flobio",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 259,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/67/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/67/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/67/high",
		},
	},

	evolveFrom: {
		en: "Mudkip",
		fr: "Gobou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},

	abilities: [{
		id: 319,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Plunge",
			fr: "Plongeon",
		},
		text: {
			en: "Once during your turn (before your attack), if Marshtomp is on your Bench, you may flip a coin. If heads, move all Energy cards attached to your Active Pokémon to Marshtomp. If you do, switch Marshtomp with that Active Pokémon.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Flobio se trouve sur votre Banc, vous pouvez lancer une pièce. Si c'est face, déplacez toutes les cartes Énergie attachées à votre Pokémon Actif sur Flobio. Échangez alors Flobio avec ce Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mud Shot",
			fr: "Tir de boue",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
