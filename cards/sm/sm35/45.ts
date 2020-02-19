import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-45",
	localId: 45,

	// Card informations
	name: {
		en: "Marshadow",
		fr: "Marshadow",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 802,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/45/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/45/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/45/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/45/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 162,
		name: "Emi Ando"
	},

	abilities: [{
		id: 209,
		type: AbilityType.TALENT,
		name: {
			en: "Let Loose",
			fr: "Libérer",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may have each player shuffle their hand into their deck and draw 4 cards.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez demander à tous les joueurs de mélanger leur main avec leur deck et de piocher 4 cartes.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Punch",
			fr: "Poing Ombre",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card

