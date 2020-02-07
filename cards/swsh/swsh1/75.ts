import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/swsh/swsh1/75/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/75/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/75/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/75/high.png",
		},
	},

	evolveFrom: {
		en: "Yamper",
		fr: "Voltoutou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 21,
		name: "Misa Tsutsui"
	},



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

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

