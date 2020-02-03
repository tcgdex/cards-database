import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-85",
	localId: 85,

	// Card informations
	name: {
		en: "Lopunny",
		fr: "Lockpin",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 428,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/85/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/85/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/85/high.png",
		},
	},

	evolveFrom: {
		en: "Buneary",
		fr: "Laporeille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},

	abilities: [{
		id: 651,
		type: AbilityType.TALENT,
		name: {
			en: "Big Jump",
			fr: "Grand Saut",
		},
		text: {
			en: "Once during your turn (before your attack), you may return this Pokémon and all cards attached to it to your hand.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez reprendre ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sitdown Bounce",
			fr: "Rebond Ressort",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon can't attack during your next turn.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card

