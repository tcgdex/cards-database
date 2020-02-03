import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-95",
	localId: 95,

	// Card informations
	name: {
		en: "Aegislash",
		fr: "Exagide",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 681,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/95/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/95/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/95/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/95/high.png",
		},
	},

	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},

	abilities: [{
		id: 1395,
		type: AbilityType.TALENT,
		name: {
			en: "Durable Blade",
			fr: "Lame Résistante",
		},
		text: {
			en: "If this Pokémon is Knocked Out by damage from an opponent's attack, put it into your hand instead of the discard pile. (Discard all cards attached to it.)",
			fr: "Si ce Pokémon est mis K.O. par les dégâts d’une attaque de votre adversaire, placez-le dans votre main plutôt que dans votre pile de défausse. (Défaussez toutes les cartes qui lui sont attachées.)",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Trash Slash",
			fr: "Déchets Déchiquetés",
		},
		text: {
			en: "This attack does 10 damage for each Item card in your discard pile. You can't do more than 130 damage in this way.",
			fr: "Cette attaque inflige 10 dégâts pour chaque carte Objet dans votre pile de défausse. Vous ne pouvez pas infliger plus de 130 dégâts de cette façon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

