import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-52",
	localId: 52,

	// Card informations
	name: {
		en: "Manectric",
		fr: "Élecsprint",
	},

	hp: 110,

	type: [
		Type.LIGHTNING,
	],

	dexId: 310,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/52/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/52/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/52/high",
		},
	},

	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},

	abilities: [{
		id: 1332,
		type: AbilityType.TALENT,
		name: {
			en: "Electric Start",
			fr: "Démarrage Électrique",
		},
		text: {
			en: "If you go second, and if this Pokémon is in your hand when you are setting up to play, you may put it face down as your Active Pokémon or on your Bench.",
			fr: "Si vous jouez en second et que ce Pokémon est dans votre main lorsque vous vous apprêtez à jouer, vous pouvez le placer, face cachée, en tant que Pokémon Actif ou Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Double Charge",
			fr: "Charge Dupliquée",
		},
		text: {
			en: "You may attach up to 2 basic Energy cards from your hand to 1 of your Benched Pokémon.",
			fr: "Vous pouvez attacher jusqu’à 2 cartes Énergie de base de votre main à l’un de vos Pokémon de Banc.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
