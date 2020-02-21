import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-15",
	localId: 15,

	// Card informations
	name: {
		en: "Drapion",
		fr: "Drapion",
	},

	hp: 110,

	type: [
		Type.DARKNESS,
	],

	dexId: 452,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/15/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/15/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/15/high",
		},
	},

	evolveFrom: {
		en: "Skorupi",
		fr: "Rapion",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		name: {
			en: "Scorpion Grapple",
			fr: "Lutte scorpion",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cross Poison",
			fr: "Poison-croix",
		},
		text: {
			en: "Flip 4 coins. This attack does 20 damage times the number of heads. If 2 or more of them are heads, the Defending Pokémon is now Poisoned.",
			fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces. Si vous obtenez au moins 2 faces, le Pokémon  Défenseur est maintenant Empoisonné.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Derail",
			fr: "Dérailler",
		},
		text: {
			en: "Discard all Special Energy cards attached to the Defending Pokémon.",
			fr: "Défaussez toutes les cartes Énergie Spéciale attachées au Pokémon Défenseur.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
