import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-96",
	localId: 96,

	// Card informations
	name: {
		en: "Talonflame",
		fr: "Flambusard",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 663,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/96/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/96/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/96/high",
		},
	},

	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 554,
		type: AbilityType.TALENT,
		name: {
			en: "Gale Wings",
			fr: "Ailes Bourrasque",
		},
		text: {
			en: "If this Pokémon is in your hand when you are setting up to play, you may put it face down as your Active Pokémon.",
			fr: "Si ce Pokémon est dans votre main lorsque vous vous apprêtez à jouer, vous pouvez le placer, face cachée, en tant que Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Aero Blitz",
			fr: "Attaque Aérienne",
		},
		text: {
			en: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez jusqu’à 2 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
