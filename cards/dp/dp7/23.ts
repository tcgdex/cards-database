import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-23",
	localId: 23,

	// Card informations
	name: {
		en: "Roserade",
		fr: "Roserade",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 407,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/23/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/23/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/23/high",
		},
	},

	evolveFrom: {
		en: "Roselia",
		fr: "Roselia",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 297,
		type: AbilityType.POKEBODY,
		name: {
			en: "Hidden Poison",
			fr: "Poison caché",
		},
		text: {
			en: "If Roserade is your Active Pokémon and is damaged by an opponent's attack (even if Roserade is Knocked Out), the Defending Pokémon is now Poisoned.",
			fr: "Si Roserade est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Roserade est mis K.O), le Pokémon Attaquant est maintenant Empoisonné.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bowed Whip",
			fr: "Fouet courbé",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If heads, discard an Energy card attached to that Pokémon.",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée à ce Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Deep Poison",
			fr: "Poison profond",
		},
		text: {
			en: "If the Defending Pokémon is Poisoned, this attack does 50 damage plus 30 more damage.",
			fr: "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
