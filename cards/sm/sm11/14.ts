import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-14",
	localId: 14,

	// Card informations
	name: {
		en: "Amoonguss",
		fr: "Gaulet",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 591,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/14/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/14/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/14/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/14/high.png",
		},
	},

	evolveFrom: {
		en: "Foongus",
		fr: "Trompignon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 851,
		type: AbilityType.TALENT,
		name: {
			en: "Bursting Spores",
			fr: "Nuée de Spores",
		},
		text: {
			en: "Whenever you play a Pokémon that has the Spore attack from your hand during your turn, you may leave your opponent's Active Pokémon Asleep and Poisoned.",
			fr: "Chaque fois que vous jouez un Pokémon qui a l’attaque Spore de votre main pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Endormi et Empoisonné.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Venoshock",
			fr: "Choc Venin",
		},
		text: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 70 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

