import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-104",
	localId: 104,

	// Card informations
	name: {
		en: "Togekiss",
		fr: "Togekiss",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 468,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/104/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/104/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/104/high",
		},
	},

	evolveFrom: {
		en: "Togetic",
		fr: "Togetic",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 737,
		type: AbilityType.TALENT,
		name: {
			en: "Bright Veil",
			fr: "Voile Lumineux",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, whenever your opponent plays an Item card from his or her hand, prevent all effects of that card done to your Pokémon.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, chaque fois que votre adversaire joue une carte Objet de sa main, évitez tous les effets que la carte Objet peut infliger à vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Return",
			fr: "Retour",
		},
		text: {
			en: "Draw cards until you have 6 cards in your hand.",
			fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
