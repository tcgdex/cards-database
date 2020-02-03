import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-51",
	localId: 51,

	// Card informations
	name: {
		en: "Charjabug",
		fr: "Chrysapile",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 737,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/51/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/51/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/51/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/51/high.png",
		},
	},

	evolveFrom: {
		en: "Grubbin",
		fr: "Larvibule",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Shocking Jaws",
			fr: "Mâchoires Choquantes",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

