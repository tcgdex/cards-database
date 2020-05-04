import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-75",
	localId: 75,

	// Card informations
	name: {
		en: "Boltund",
		fr: "Fulgudog",
	},

	hp: 130,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/75/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/75/low",
		}
	},

	evolveFrom: {
		en: "Yamper",
		fr: "Voltoutou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Misa Tsutsui",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Big Bite",
			fr: "Grosse Morsure",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
		},
		damage: 50
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fighting Fangs",
			fr: "Crocs Combatifs",
		},
		text: {
			en: "If your opponent’s Active Pokémon is a Pokémon V or Pokémon-GX, this attack does 90 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V ou un Pokémon-GX, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: "90+"
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
