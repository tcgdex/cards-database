import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM132",
	localId: "SM132",

	// Card informations
	name: {
		en: "Delcatty",
		fr: "Delcatty",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 301,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM132/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM132/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM132/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM132/high.png",
		},
	},

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 112,
		name: "0313"
	},

	abilities: [{
		id: 1054,
		type: AbilityType.TALENT,
		name: {
			en: "Search for Friends",
			fr: "En Quête d’Amis",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 2 Supporter cards from your discard pile into your hand.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez ajouter 2 cartes Supporter de votre pile de défausse à votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cat Kick",
			fr: "Coup d’Patte",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card

