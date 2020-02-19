import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-56",
	localId: 56,

	// Card informations
	name: {
		en: "Grumpig",
		fr: "Groret",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 326,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/56/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/56/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/56/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/56/high.png",
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
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		name: {
			en: "Magical Step",
			fr: "Pas magique",
		},
		text: {
			en: "The Defending Pokémon is now Confused. Put 6 damage counters instead of 3 on the Confused Pokémon.",
			fr: "Le Pokémon Défenseur est maintenant Confus. Placez sur le Pokémon Confus 6 marqueurs de dégât au lieu de 3.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Grind",
			fr: "Écrase",
		},
		text: {
			en: "Does 20 damage times the amount of Energy attached to Grumpig.",
			fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à Groret.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

