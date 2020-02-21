import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-8",
	localId: 8,

	// Card informations
	name: {
		en: "Sceptile",
		fr: "Jungko",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 254,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/8/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/8/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/8/high",
		},
	},

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 1126,
		type: AbilityType.TALENT,
		name: {
			en: "Nurture and Heal",
			fr: "Nourri-Guéri",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a Grass Energy card from your hand to 1 of your Pokémon. If you do, heal 30 damage from that Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Grass de votre main à l'un de vos Pokémon. Dans ce cas, soignez 30 dégâts au Pokémon choisi.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jungle Edge",
			fr: "Dague Végétale",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
