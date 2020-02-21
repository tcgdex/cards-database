import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-46",
	localId: 46,

	// Card informations
	name: {
		en: "Togekiss",
		fr: "Togekiss",
	},

	hp: 130,

	type: [
		Type.FAIRY,
	],

	dexId: 468,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/46/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/46/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/46/high",
		},
	},

	evolveFrom: {
		en: "Togetic",
		fr: "Togetic",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 116,
		name: "PLANETA"
	},

	abilities: [{
		id: 200,
		type: AbilityType.TALENT,
		name: {
			en: "Serene Grace",
			fr: "Évolution Δ",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may look at the top 8 cards of your deck. Choose any basic Energy cards you find there and attach them to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
			fr: "Vous pouvez jouer cette carte de votre main pour faire évoluer un Pokémon pendant votre premier tour ou pendant le tour où vous le jouez.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
