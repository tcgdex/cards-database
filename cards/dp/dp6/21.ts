import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-21",
	localId: 21,

	// Card informations
	name: {
		en: "Cradily",
		fr: "Vacilys",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 346,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/21/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/21/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/21/high",
		},
	},

	evolveFrom: {
		en: "Lileep",
		fr: "Liliep",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Drain Down",
			fr: "Assécher",
		},
		text: {
			en: "Before doing damage, you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. If you do, this attack does 30 damage to the new Defending Pokémon. If the Defending Pokémon would be Knocked Out by this attack, you may remove all damage counters from Cradily.",
			fr: "Avant d'infliger des dégâts, vous pouvez échanger 1 des Pokémon Défenseurs avec 1 des Pokémon de Banc de votre adversaire. Cette attaque inflige alors 30 dégâts au nouveau Pokémon Défenseur. Si le Pokémon Défenseur est mis K.O par cette attaque, vous pouvez retirer à Vacilys tous ses marqueurs de dégât.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Acid",
			fr: "Acide",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
