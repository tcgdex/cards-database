import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-3",
	localId: 3,

	// Card informations
	name: {
		en: "Jumpluff",
		fr: "Cotovol",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 189,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/3/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/3/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/3/high.png",
		},
	},

	evolveFrom: {
		en: "Skiploom",
		fr: "Floravol",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 1438,
		type: AbilityType.TALENT,
		name: {
			en: "Leave It to the Wind",
			fr: "Vole au Vent",
		},
		text: {
			en: "Once during your turn (before your attack), you may return this Pokémon and all cards attached to it to your hand.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez reprendre ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Acrobatics",
			fr: "Acrobatie",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card

