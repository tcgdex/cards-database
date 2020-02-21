import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-54",
	localId: 54,

	// Card informations
	name: {
		en: "Unown",
		fr: "Zarbi",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/54/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/54/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/54/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},

	abilities: [{
		id: 920,
		type: AbilityType.POKEPOWER,
		name: {
			en: "RETURN",
			fr: "RETOUR",
		},
		text: {
			en: "Once during your turn, when you put Unown from your hand onto your Bench, you may return all Energy attached to 1 of your Pokémon to your hand.",
			fr: "Une seule fois pendant votre tour, lorsque vous prenez Zarbi dans votre main et le placez sur le Banc, vous pouvez retourner toutes les cartes Énergie attachées à un Pokémon de votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
