import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-44",
	localId: 44,

	// Card informations
	name: {
		en: "Victreebel",
		fr: "Empiflor",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 71,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/44/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/44/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/44/high",
		},
	},

	evolveFrom: {
		en: "Weepinbell",
		fr: "Ultrigaria",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		name: {
			en: "Burning Scent",
			fr: "Odeur de brûlé",
		},
		text: {
			en: "The Defending Pokémon is now Burned and Poisoned. Before applying these effects, you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Burned and Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé et Empoisonné. Avant d'appliquer ces effets, vous pouvez échanger 1 des Pokémon Défenseurs avec 1 des Pokémon de Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Brûlé et Empoisonné.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Dissolve",
			fr: "Élimination d'Énergie",
		},
		text: {
			en: "Discard an Energy attached to the Defending Pokémon at the end of your opponent's next turn.",
			fr: "Défaussez une Énergie attachée au Pokémon Défenseur à la fin du prochain tour de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
