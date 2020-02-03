import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-53",
	localId: 53,

	// Card informations
	name: {
		en: "Primeape",
		fr: "Colossinge",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 57,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/53/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/53/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/53/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/53/high.png",
		},
	},

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Swagger",
			fr: "Vantardise",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c’est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Spirited Throw",
			fr: "Lancer Plein d’Esprit",
		},
		text: {
			en: "If, before doing damage, your opponent's Active Pokémon has more remaining HP than this Pokémon, this attack does 60 more damage.",
			fr: "Si, avant d’infliger des dégâts, il reste plus de PV au Pokémon Actif de votre adversaire qu’à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

