import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-88",
	localId: 88,

	// Card informations
	name: {
		en: "Raticate",
		fr: "Rattatac",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/88/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/88/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/88/high.png",
		},
	},

	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 1351,
		type: AbilityType.TALENT,
		name: {
			en: "Antibodies",
			fr: "Anticorps",
		},
		text: {
			en: "This Pokémon can't be affected by any Special Conditions. (Remove any Special Conditions affecting this Pokémon.)",
			fr: "Ce Pokémon ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant ce Pokémon.)",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dirty Shock",
			fr: "Choc Crasseux",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned. Discard all Pokémon Tool cards attached to that Pokémon.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Défaussez toutes les cartes Outil Pokémon attachées au Pokémon ciblé.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card

