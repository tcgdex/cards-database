import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-153",
	localId: 153,

	// Card informations
	name: {
		en: "Blissey",
		fr: "Leuphorie",
	},

	hp: 160,

	type: [
		Type.COLORLESS,
	],

	dexId: 242,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/153/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/153/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/153/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/153/high.png",
		},
	},

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},

	abilities: [{
		id: 1264,
		type: AbilityType.TALENT,
		name: {
			en: "Happiness Supplement",
			fr: "Complément de Joie",
		},
		text: {
			en: "Once during your turn (before your attack), you may remove a Special Condition from your Active Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez retirer un État Spécial de votre Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Powerful Slap",
			fr: "Grosse Baffe",
		},
		text: {
			en: "Flip a coin for each Energy attached to this Pokémon. This attack does 80 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 80 dégâts pour chaque côté face.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

