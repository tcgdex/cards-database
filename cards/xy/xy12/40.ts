import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-40",
	localId: 40,

	// Card informations
	name: {
		en: "Electrode",
		fr: "Électrode",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/40/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/40/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/40/high.png",
		},
	},

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},

	abilities: [{
		id: 1297,
		type: AbilityType.TALENT,
		name: {
			en: "Buzzap Thunder",
		},
		text: {
			en: "Once during your turn (before your attack), you may Knock Out this Pokémon and attach it to one of your Lightning Pokémon as a Special Energy card. This card provides 2 Lightning Energy only while this card is attached to a Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Head Bolt",
			fr: "Talent : Tonnerre Buzzap",
		},
		text: {
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez mettre K.O. ce Pokémon et l’attacher à l’un de vos Pokémon Lightning en tant que carte Énergie spéciale. Cette carte ne fournit 2 Énergies Lightning que pendant qu’elle est attachée à un Pokémon.",
		},
		damage: 70
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			fr: "Éclair Frontal",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card

