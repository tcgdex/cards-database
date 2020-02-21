import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-34",
	localId: 34,

	// Card informations
	name: {
		en: "Clawitzer",
		fr: "Gamblast",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 693,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/34/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/34/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/34/high",
		},
	},

	evolveFrom: {
		en: "Clauncher",
		fr: "Flingouste",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 669,
		type: AbilityType.TALENT,
		name: {
			en: "Mega Boost",
			fr: "Méga Boost",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a Special Energy card from your hand to 1 of your Mega Evolution Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie spéciale de votre main à l’un de vos Pokémon Méga-Évolution.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crabhammer",
			fr: "Pince-Masse",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
