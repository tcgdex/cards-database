import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-108",
	localId: 108,

	// Card informations
	name: {
		en: "Lugia-EX",
		fr: "Lugia-EX",
	},

	hp: 180,

	type: [
		Type.COLORLESS,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/108/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/108/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/108/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},

	abilities: [{
		id: 173,
		type: AbilityType.TALENT,
		name: {
			en: "Overflow",
			fr: "Débordement",
		},
		text: {
			en: "If your opponent's Pokémon is Knocked Out by damage from an attack of this Pokémon, take 1 more Prize card.",
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts d'une attaque de ce Pokémon, récupérez 1 carte Récompense supplémentaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Plasma Gale",
			fr: "Bourrasque Plasma",
		},
		text: {
			en: "Discard a Plasma Energy attached to this Pokémon. If you can't discard a Plasma Energy, this attack does nothing.",
			fr: "Défaussez une Énergie Plasma attachée à ce Pokémon. Si vous ne pouvez pas défausser une Énergie Plasma, cette attaque ne fait rien.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
