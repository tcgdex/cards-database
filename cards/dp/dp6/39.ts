import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-39",
	localId: 39,

	// Card informations
	name: {
		en: "Registeel",
		fr: "Registeel",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 379,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/39/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/39/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/39/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/39/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 122,
		name: "Kazuaki Aihara"
	},

	abilities: [{
		id: 388,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Regi Heal",
			fr: "Regi-guérison",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard 2 cards from your hand. Then, remove 3 damage counters from Registeel. This power can't be used if Registeel is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser 2 cartes de votre main. Ensuite, retirez à Registeel 3 marqueurs de dégât. Ce pouvoir ne peut pas être utilisé si Registeel est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rotating Claws",
			fr: "Griffes tournantes",
		},
		text: {
			en: "You may discard an Energy card attached to Registeel. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Registeel.",
			fr: "Vous pouvez défausser une carte Énergie attachée à Registeel. Choisissez alors dans votre pile de défausse une carte Énergie (celle que vous venez de défausser exclue) et attachez-la à Registeel.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

