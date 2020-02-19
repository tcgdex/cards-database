import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-85",
	localId: 85,

	// Card informations
	name: {
		en: "Watchog",
		fr: "Miradar",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 505,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/85/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/85/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/85/high.png",
		},
	},

	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Held-Item Inspection",
			fr: "Inspection des Bagages",
		},
		text: {
			en: "Your opponent reveals his or her hand. Choose an Item card you find there. Your opponent shuffles that card into his or her deck.",
			fr: "Votre adversaire montre sa main. Choisissez une carte Objet que vous y trouvez. Votre adversaire mélange la carte choisie avec son deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thorough Crunch",
			fr: "Mâchouille Impitoyable",
		},
		text: {
			en: "Flip 2 coins. For each heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card

