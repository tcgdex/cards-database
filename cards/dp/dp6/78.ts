import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-78",
	localId: 78,

	// Card informations
	name: {
		en: "Unown U",
		fr: "Zarbi U",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/78/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/78/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/78/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/78/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},

	abilities: [{
		id: 603,
		type: AbilityType.POKEBODY,
		name: {
			en: "UNSEEN",
			fr: "UNSEEN",
		},
		text: {
			en: "As long as Unown U is on your Bench, prevent all effects of attacks, including damage, done by your opponent's Pokémon to any Unown on your Bench.",
			fr: "Tant que Zarbi U est sur votre Banc, prévenez tous les effets d'attaques, dégâts inclus, infligés à n'importe quel Zarbi se trouvant sur votre Banc par les Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		text: {
			en: "Search your deck for any 1 card and discard it. Shuffle your deck afterward.",
			fr: "Choisissez 1 carte dans votre deck et défaussez-la. Ensuite, mélangez votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

