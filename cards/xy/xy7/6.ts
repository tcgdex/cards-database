import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-6",
	localId: 6,

	// Card informations
	name: {
		en: "Ariados",
		fr: "Migalos",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 168,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/6/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/6/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/6/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/6/high.png",
		},
	},

	evolveFrom: {
		en: "Spinarak",
		fr: "Mimigal",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 1281,
		type: AbilityType.TALENT,
		name: {
			en: "Poisonous Nest",
			fr: "Nid Empoisonné",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this Ability. Both Active Pokémon (except for Grass Pokémon) are now Poisoned.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce talent. Les deux Pokémon Actifs (à part les Pokémon Grass) sont maintenant Empoisonnés.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Impound",
			fr: "Confiscation",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

