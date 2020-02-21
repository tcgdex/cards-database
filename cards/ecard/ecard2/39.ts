import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-39",
	localId: 39,

	// Card informations
	name: {
		en: "Togetic",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 176,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/39/high",
		},
	},

	evolveFrom: {
		en: "Togepi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 1293,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Miracle Shift",
		},
		text: {
			en: "Once during your turn (before your attack), discard a basic Energy card attached to 1 of your Pokémon. Then, choose a basic Energy card from your discard pile and attach it to that Pokémon. This power can't be used if Togetic is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mini-Metronome",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 of the Defending Pokémon's attacks. Mini-Metronome copies that attack except for its Energy cost. (You must still do anything else required in order to use that attack.) (No matter what type the Defending Pokémon is, Togetic is still ). Togetic performs the attack.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
