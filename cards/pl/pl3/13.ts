import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-13",
	localId: 13,

	// Card informations
	name: {
		en: "Venusaur",
		fr: "Florizarre",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 3,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/13/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/13/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/13/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/13/high.png",
		},
	},

	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 793,
		type: AbilityType.POKEBODY,
		name: {
			en: "Green Aroma",
			fr: "Arôme vert",
		},
		text: {
			en: "Remove all Special Conditions from each of your Grass Pokémon. Each of your Grass Pokémon can't be affected by any Special Conditions.",
			fr: "Retirez à chacun de vos Pokémon Grass tous leurs États Spéciaux. Aucun de vos Pokémon Grass ne peut être affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Desperate Pollen",
			fr: "Pollen désespéré",
		},
		text: {
			en: "If Venusaur already has 8 or more damage counters on it, the Defending Pokémon is now Burned, Confused, and Poisoned.",
			fr: "Si Florizarre possède déjà au moins 8 marqueurs de dégât, le Pokémon Défenseur est maintenant Brûlé, Confus et Empoisonné.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Special Reaction",
			fr: "Réaction spéciale",
		},
		text: {
			en: "If the Defending Pokémon is affected by any Special Conditions, this attack does 40 damage plus 40 more damage for each of those Special Conditions.",
			fr: "Si le Pokémon Défenseur est affecté par des États Spéciaux, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires pour chacun de ces États Spéciaux.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+40"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

