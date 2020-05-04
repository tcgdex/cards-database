import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-27",
	localId: 27,

	// Card informations
	name: {
		en: "Arbok",
		fr: "Arbok",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 24,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/27/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/27/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/27/high",
		},
	},

	evolveFrom: {
		en: "Ekans",
		fr: "Abo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",

	abilities: [{
		id: 1131,
		type: AbilityType.TALENT,
		name: {
			en: "Last Pattern",
			fr: "Dernier Motif",
		},
		text: {
			en: "If this Pokémon is Knocked Out by damage from an opponent's attack, discard 2 random cards from your opponent's hand.",
			fr: "Si ce Pokémon est mis K.O. par les dégâts d’une attaque de votre adversaire, défaussez 2 cartes au hasard de la main de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rocket Tail",
			fr: "Queue Rocket",
		},
		text: {
			en: "If Jessie & James is in your discard pile, this attack does 80 more damage.",
			fr: "Si la carte Jessie et James est dans votre pile de défausse, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
