import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss1/106/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/106/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/106/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/106/high.png",
		},
	},

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 63,
		name: "Noriko Hotta"
	},

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

