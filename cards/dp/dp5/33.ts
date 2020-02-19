import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-33",
	localId: 33,

	// Card informations
	name: {
		en: "Unown P",
		fr: "Zarbi P",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/33/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/33/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/33/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/33/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},

	abilities: [{
		id: 30,
		type: AbilityType.POKEPOWER,
		name: {
			en: "PUT",
			fr: "PLACER",
		},
		text: {
			en: "Once during your turn (before your attack), if Unown P is on your Bench, you may put 1 damage counter on 1 of your Pokémon (excluding any Unown).",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi P est sur votre Banc, vous pouvez placer 1 marqueur de dégât sur 1 de vos Pokémon (Pokémon Zarbi exclus).",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		text: {
			en: "Each player discards the top card of his or her deck. This attack does 20 damage plus 20 more damage for each Unown discarded in this way.",
			fr: "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque Zarbi défaussée de cette façon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card

