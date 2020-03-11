import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-106",
	localId: 106,

	// Card informations
	name: {
		en: "Blissey",
		fr: "Leuphorie",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 242,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/106/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/106/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/106/high",
		},
	},

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Noriko Hotta",

	abilities: [{
		id: 1032,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Blissful Nurse",
			fr: "Infirmière divine",
		},
		text: {
			en: "Once during your turn, when you play Blissey from your hand to evolve 1 of your Pokémon, you may remove all damage counters from all of your Pokémon. If you do, discard all Energy attached to those Pokémon that had any damage counters on them.",
			fr: "Une seule fois pendant votre tour, lorsque vous jouez Leuphorie dans votre main pour faire évoluer l’un de vos Pokémon, vous pouvez retirer tous les marqueurs de dégâts de tous vos Pokémon. Dans ce cas, défaussez-vous de toutes les énergies attachées aux Pokémon qui avaient des marqueurs de dégâts.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strength",
			fr: "Force",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
