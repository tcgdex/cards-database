import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-4",
	localId: 4,

	// Card informations
	name: {
		en: "Dark Electrode",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
		Type.DARKNESS,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/4/high",
		},
	},

	evolveFrom: {
		en: "Voltorb",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 997,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Darkness Navigation",
		},
		text: {
			en: "Once during your turn (before your attack), if Dark Electrode has no Energy attached to it, you may search your deck for a Darkness or Dark Metal Energy and attach it to Dark Electrode. Shuffle your deck afterward. This power can't be used if Dark Electrode is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Energy Bomb",
		},
		text: {
			en: "You may move all Energy cards attached to Dark Electrode to your Benched Pokémon in any way you like.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
