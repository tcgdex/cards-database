import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-11",
	localId: 11,

	// Card informations
	name: {
		en: "Venomoth",
		fr: "Aéromite",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 49,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/11/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/11/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/11/high",
		},
	},

	evolveFrom: {
		en: "Venonat",
		fr: "Mimitoss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},

	abilities: [{
		id: 418,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Poison Moth Wind",
			fr: "Vent de Papipoison",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, your opponent's Active Pokémon is now Poisoned. If tails, your Active Pokémon is now Poisoned. This power can't be used if Venomoth is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné. Si c'est pile, votre Pokémon Actif est maintenant Empoisonné. Ce Poké-Power ne peut pas être utilisé si Aéromite est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Stun Spore",
			fr: "Para-spore",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
