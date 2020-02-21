import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-7",
	localId: 7,

	// Card informations
	name: {
		en: "Flygon δ",
	},

	hp: 110,

	type: [
		Type.GRASS,
		Type.METAL,
	],

	dexId: 330,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/7/high",
		},
	},

	evolveFrom: {
		en: "Vibrava",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 331,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Delta Supply",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a basic Energy card or a δ Rainbow Energy card from your hand to 1 of your Pokémon that has δ on its card. This power can't be used if Flygon is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Swift",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
