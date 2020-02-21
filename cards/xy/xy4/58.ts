import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-58",
	localId: 58,

	// Card informations
	name: {
		en: "Malamar-EX",
		fr: "Sepiatroce-EX",
	},

	hp: 170,

	type: [
		Type.DARKNESS,
	],

	dexId: 687,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/58/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/58/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},

	abilities: [{
		id: 1407,
		type: AbilityType.TALENT,
		name: {
			en: "Hyper Hypnosis",
			fr: "Hypnose Intense",
		},
		text: {
			en: "When you attach an Energy from your hand to this Pokémon, you may use this Ability. Your opponent's Active Pokémon is now Asleep.",
			fr: "Lorsque vous attachez une Énergie de votre main à ce Pokémon, vous pouvez utiliser ce talent. Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "MAXamar",
			fr: "MAXatroce",
		},
		text: {
			en: "Flip a coin for each Energy attached to this Pokémon. This attack does 60 damage times the number of heads.",
			fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
