import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-122",
	localId: 122,

	// Card informations
	name: {
		en: "Alolan Dugtrio",
		fr: "Triopikeur d’Alola",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 51,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/122/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/122/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/122/high",
		},
	},

	evolveFrom: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 102,
		name: "SATOSHI NAKAI"
	},

	abilities: [{
		id: 476,
		type: AbilityType.TALENT,
		name: {
			en: "Hair Wall",
			fr: "Mur Capillaire",
		},
		text: {
			en: "Your Metal Pokémon take 10 less damage from your opponent's attacks (after applying Weakness and Resistance).",
			fr: "Vos Pokémon Metal subissent 10 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
