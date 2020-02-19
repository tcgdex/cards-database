import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-97",
	localId: 97,

	// Card informations
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
	},

	hp: 150,

	type: [
		Type.DRAGON,
	],

	dexId: 635,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/97/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/97/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/97/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/97/high.png",
		},
	},

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 159,
		type: AbilityType.TALENT,
		name: {
			en: "Dark Trance",
			fr: "Transe Obscure",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Darkness Energy attached to 1 of your Pokémon to another of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Darkness attachée à 1 de vos Pokémon vers un autre de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragonblast",
			fr: "Dracoxplosion",
		},
		text: {
			en: "Discard 2 Darkness Energy attached to this Pokémon.",
			fr: "Défaussez 2 Énergies Darkness attachées à ce Pokémon.",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card

