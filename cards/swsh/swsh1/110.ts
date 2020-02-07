import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-110",
	localId: 110,

	// Card informations
	name: {
		en: "Sandaconda",
		fr: "Dunaconda",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/110/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/110/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/110/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/110/high.png",
		},
	},

	evolveFrom: {
		en: "Silicobra",
		fr: "Dunaja",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "nagimiso"
	},

	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Sand Sac",
			fr: "Poche de Sable",
		},
		text: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Power Press",
			fr: "Étau Puissant",
		},
		text: {
			en: "If this Pokémon has at least 1 extra Fighting Energy attached (in addition to this attack's cost), this attack does 70 more damage.",
			fr: "Si au moins une Énergie Fighting supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: "60+"
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

