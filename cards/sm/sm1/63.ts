import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-63",
	localId: 63,

	// Card informations
	name: {
		en: "Toxapex",
		fr: "Prédastérie",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 748,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/63/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/63/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/63/high",
		},
	},

	evolveFrom: {
		en: "Mareanie",
		fr: "Vorastérie",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 376,
		type: AbilityType.TALENT,
		name: {
			en: "Toxic Spikes",
			fr: "Pics Toxik",
		},
		text: {
			en: "Whenever your opponent's Active Pokémon retreats, their new Active Pokémon is Poisoned.",
			fr: "Lorsque le Pokémon Actif de votre adversaire bat en retraite, son nouveau Pokémon Actif est Empoisonné.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Venoshock",
			fr: "Choc Venin",
		},
		text: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
