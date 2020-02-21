import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-47",
	localId: 47,

	// Card informations
	name: {
		en: "Miltank",
		fr: "Écrémeuh",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 241,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/47/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/47/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/47/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Moomoo Squeeze",
			fr: "Compression Meumeu",
		},
		text: {
			en: "Search your deck for a Moomoo Milk card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez une carte Lait Meumeu dans votre deck, montrez-la à votre adversaire, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Body Slam",
			fr: "Plaquage",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
