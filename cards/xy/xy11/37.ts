import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-37",
	localId: 37,

	// Card informations
	name: {
		en: "Avalugg",
		fr: "Séracrawl",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 713,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/37/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/37/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/37/high",
		},
	},

	evolveFrom: {
		en: "Bergmite",
		fr: "Grelaçon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c’est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Melting Floe",
			fr: "Banquise Fondante",
		},
		text: {
			en: "Discard the top 3 cards of your deck. For each Water Energy card you discarded in this way, discard the top 3 cards of your opponent's deck.",
			fr: "Défaussez les 3 cartes du dessus de votre deck. Pour chaque carte Énergie Water défaussée de cette façon, défaussez les 3 cartes du dessus du deck de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
