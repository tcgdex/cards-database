import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-82",
	localId: 82,

	// Card informations
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
	},

	hp: 110,

	type: [
		Type.LIGHTNING,
	],

	dexId: 523,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/82/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/82/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/82/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/82/high.png",
		},
	},

	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 66,
		name: "Misa Tsutsui"
	},

	abilities: [{
		id: 1253,
		type: AbilityType.TALENT,
		name: {
			en: "Sprint",
			fr: "Sprint",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard your hand and draw 4 cards.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser votre main et piocher 4 cartes.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

