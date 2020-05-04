import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-39",
	localId: 39,

	// Card informations
	name: {
		en: "Jellicent",
		fr: "Moyade",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 593,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/39/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/39/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/39/high",
		},
	},

	evolveFrom: {
		en: "Frillish",
		fr: "Viskuse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1044,
		type: AbilityType.TALENT,
		name: {
			en: "Spiteful Spirit",
			fr: "Esprit Malveillant",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, the Attacking Pokémon is now Confused and Poisoned.",
			fr: "Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d'une attaque de votre adversaire, le Pokémon Attaquant est maintenant Confus et Empoisonné.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Bullet",
			fr: "Aquaballe",
		},
		text: {
			en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
