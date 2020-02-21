import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-1",
	localId: 1,

	// Card informations
	name: {
		en: "Ampharos",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/1/high",
		},
	},

	evolveFrom: {
		en: "Flaaffy",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},

	abilities: [{
		id: 244,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Connect",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a basic Energy card attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Ampharos is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Miraculous Thunder",
		},
		text: {
			en: "You may discard all Lightning Energy attached to Ampharos. If you do, the Defending Pokémon is now Burned and Confused.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
