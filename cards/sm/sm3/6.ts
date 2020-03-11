import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-6",
	localId: 6,

	// Card informations
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 45,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/6/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/6/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/6/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "chibi",

	abilities: [{
		id: 1199,
		type: AbilityType.TALENT,
		name: {
			en: "Disgusting Pollen",
			fr: "Pollen Dégoûtant",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent's Basic Pokémon can't attack.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, les Pokémon de base de votre adversaire ne peuvent pas attaquer.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Downer Shock",
			fr: "Choc Immobilisateur",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep. If tails, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
