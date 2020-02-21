import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-28",
	localId: 28,

	// Card informations
	name: {
		en: "Slowking",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 199,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/28/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 856,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Prize Shift",
		},
		text: {
			en: "Once during your turn (before your attack), you may choose a card from your hand and put it as a Prize card face up. If you do, choose 1 of your face-down Prize cards without looking and put it into your hand. This power can't be used if Slowking is affected by a Special Condition or if all of your Prize cards are face up.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Option",
		},
		text: {
			en: "If Slowking has a Water Energy card attached to it, this attack does 20 damage plus 20 more damage. If Slowking has a Psychic Energy card attached to it, discard a Special Energy card attached to the Defending Pokémon, if any.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
