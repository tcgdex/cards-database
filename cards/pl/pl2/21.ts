import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-21",
	localId: 21,

	// Card informations
	name: {
		en: "Gastrodon East Sea",
		fr: "Tritosor Mer Orient Niv. 40",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 423,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/21/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/21/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/21/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/21/high.png",
		},
	},

	evolveFrom: {
		en: "Shellos East Sea",
		fr: "Sancoki Mer Orient",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 365,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sticky Hold",
			fr: "Glue",
		},
		text: {
			en: "If Gastrodon East Sea is switched or retreats to your Bench, move as many Energy cards attached to Gastrodon East Sea as you like to the new Active Pokémon.",
			fr: "Si Tritosor Mer Orient est échangé ou bat en retraite, déplacez autant de cartes Énergie qui lui sont attachées que vous le voulez sur le nouveau Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Calling Wave",
			fr: "Appel de vague",
		},
		text: {
			en: "Search your deck for up to 2 Gastrodon and put them onto your Bench as Basic Pokémon. Put 2 damage counters on each of them. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck jusqu'à 2 Tritosor et placez-les sur votre Banc comme Pokémon de base. Placez 2 marqueurs de dégât sur chacun d'eux. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse vague",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

