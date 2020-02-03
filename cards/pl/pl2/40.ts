import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-40",
	localId: 40,

	// Card informations
	name: {
		en: "Gengar GL",
		fr: "Ectoplasma  Niv. 65",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/40/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/40/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/40/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde folie",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Attack and Hide",
			fr: "Attaquer et se cacher",
		},
		text: {
			en: "Put 3 damage counters on 1 of your opponent's Pokémon. You may shuffle Gengar and all cards attached to it back into your deck.",
			fr: "Placez 3 marqueurs de dégât sur 1 des Pokémon de votre adversaire. Vous pouvez mélanger Ectoplasma  ainsi que toutes les cartes qui lui sont attachées avec votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

