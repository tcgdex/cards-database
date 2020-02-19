import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-31",
	localId: 31,

	// Card informations
	name: {
		en: "Grumpig",
		fr: "Groret",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 326,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/31/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/31/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/31/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/31/high.png",
		},
	},

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Head Walking",
			fr: "Slammeur",
		},
		text: {
			en: "Put a Basic Pokémon from your opponent's discard pile onto his or her Bench. Then, put 3 damage counters on that Pokémon.",
			fr: "Prenez un Pokémon de base dans la pile de défausse de votre adversaire et placez-le sur son Banc. Ensuite, placez 3 marqueurs de dégâts sur le Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Knock Back",
			fr: "Dégagement",
		},
		text: {
			en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

