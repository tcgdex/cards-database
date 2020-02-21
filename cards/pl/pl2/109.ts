import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-109",
	localId: 109,

	// Card informations
	name: {
		en: "Luxray GL",
		fr: "Luxray  Niv. X",
	},

	hp: 110,

	type: [
		Type.LIGHTNING,
	],

	dexId: 405,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/109/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/109/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/109/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 488,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Bright Look",
			fr: "Regard alerte",
		},
		text: {
			en: "Once during your turn (before your attack), when you put Luxray LV.X from your hand onto your Active Luxray , you may switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Luxray  LV.X de votre main sur votre Luxray  Actif, vous pouvez échanger le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Flash Impact",
			fr: "Impact-flash",
		},
		text: {
			en: "Does 30 damage to 1 of your Pokémon, and don't apply Weakness and Resistance to this damage.",
			fr: "Inflige 30 dégâts à 1 de vos Pokémon. N'appliquez pas la Faiblesse et la Résistance à ces dégâts.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
